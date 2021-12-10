import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

export const MainRouter = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
    </MainLayout>
  );
};
