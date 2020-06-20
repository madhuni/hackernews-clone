import React from 'react';

import { Route, Switch } from 'react-router-dom';

import NewsPage from '../pages/News/NewsPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={NewsPage} />
    </Switch>
  );
}
