import React from 'react';

import { Route, Switch } from 'react-router-dom';

import NewsPage from '../pages/News/NewsPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={NewsPage} />
      <Route path="/:id" component={NewsPage} />
    </Switch>
  );
}
