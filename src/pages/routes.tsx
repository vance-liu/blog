import React, { memo, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from '../stores';

import Home from './home';
import Posts from './posts';
import PostDetail from './post-detail';

const Routes = memo(function Routes() {
  useEffect(() => {
    store.oAuth.getUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>

        <Route path="/post/detail/:id">
          <PostDetail />
        </Route>
      </Switch>
    </Router>
  );
});

export default Routes;
