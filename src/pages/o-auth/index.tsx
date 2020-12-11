import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../stores';

const OAuth = observer(function OAuth() {
  const store = useStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    store.oAuth.authenticate(urlParams.get('code') || '');
  }, []);

  // TODO loading icon
  return null;
});

export default OAuth;
