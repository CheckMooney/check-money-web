import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Register } from '../pages/Register';

export const MainRouter = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </MainLayout>
  );
};
