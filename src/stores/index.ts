import { useContext, createContext } from 'react';
import { types, flow, Instance } from 'mobx-state-tree';
import { persist } from 'mst-persist';
import { configure } from 'mobx';

import themeStores from './theme';
import oAuthStores from './o-auth';

configure({ isolateGlobalState: true });

export const Store = types
  .model('store', {
    isInit: types.optional(types.boolean, false),

    ...themeStores,
    ...oAuthStores,
  })
  .actions((self) => {
    // eslint-disable-next-line require-yield
    const init = flow(function* initAction() {
      self.isInit = true;
    });

    return { init };
  });

export type StoreType = typeof Store;

export const store = Store.create();

export type StoreInstanceType = Instance<StoreType>;

export const persistKey = 'persist';

export const initStore = async () => {
  // eslint-disable-next-line no-console
  console.log('persist store start');

  return new Promise((resolve) => {
    persist(persistKey, store, {
      storage: window.localStorage,
      jsonify: true,
    })
      .then(async () => {
        // eslint-disable-next-line no-console
        console.log('persist store hydrated');

        await store.init();
        resolve(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('persist store error ', err);

        resolve(false);
      });
  });
};

export const StoreContext = createContext<StoreInstanceType>(store);

export const StoreProvider = StoreContext.Provider;

export function useStore() {
  return useContext(StoreContext);
}
