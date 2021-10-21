import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const AuthRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/register`}>
        <Register />
      </Route>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/*`}>
        <Redirect to={path} />
      </Route>
    </Switch>
  );
};
