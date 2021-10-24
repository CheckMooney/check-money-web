import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export const MainRouter = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </MainLayout>
  );
};
