import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

// @ts-ignore
import { ReactComponent as GithubSvg } from '../../assets/icons/github.svg';

import { useStore } from '../../stores';

import Icon from '../icon';

const OAuthContainer = styled.div``;

const OAuthText = styled.span`
  color: ${(props) => props.theme.color_grey_1};
  font-size: ${(props) => props.theme.font_size_medium}px;
`;

export const OAuthButton = observer(({ OAuthClientID }: { OAuthClientID: string }) => {
  const store = useStore();
  const authorization = store.oAuth.authorization && store.oAuth.user?.id;

  function callOAuth() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=' + OAuthClientID;
  }

  return (
    <OAuthContainer>
      <Icon>
        <GithubSvg />
      </Icon>
      {authorization ? <OAuthText>Logged in</OAuthText> : <OAuthText onClick={callOAuth}>Github Login</OAuthText>}
    </OAuthContainer>
  );
});

export default OAuthButton;
