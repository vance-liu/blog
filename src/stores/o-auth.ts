import { flow, types } from 'mobx-state-tree';

import config from '../config';

import { userStore } from './types';

const { OAuthClientID, OAuthSecret } = config;

const oAuthStore = types
  .model('oAuth', {
    authorization: types.optional(types.string, ''),
    user: types.optional(types.maybeNull(userStore), null),
  })
  .actions((self) => {
    const getUser = flow(function* toggleMode() {
      if (self.authorization) {
        const response = yield fetch('https://api.github.com/user', {
          headers: new Headers({
            authorization: self.authorization,
          }),
        });

        const result = yield response.json();

        if (result?.id) {
          self.user = result;
        } else {
          self.authorization = '';
        }
      }
    });

    const authenticate = flow(function* toggleMode(code: string) {
      try {
        let response: Response = yield fetch(
          'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
          {
            method: 'POST',
            body: new URLSearchParams({
              client_id: OAuthClientID,
              client_secret: OAuthSecret,
              code,
            }),
            headers: new Headers({
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            }),
          },
        );

        let result = yield response.json();

        const token_type = result?.token_type;
        const access_token = result?.access_token;

        if (token_type && access_token) {
          self.authorization = `${token_type} ${access_token}`;
        }
      } catch (e) {}

      window.location.replace(window.location.origin + window.location.pathname);
    });

    return {
      getUser,
      authenticate,
    };
  });

const oAuthStores = { oAuth: types.optional(oAuthStore, {}) };

export default oAuthStores;
