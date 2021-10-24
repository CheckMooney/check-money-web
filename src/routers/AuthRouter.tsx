import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { FindPassword } from '../pages/FindPassword';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const AuthRouter = () => {
  let { path } = useRouteMatch();
  return (
    <AuthLayout>
      <Switch>
        <Route path={`${path}/register`} exact>
          <Register />
        </Route>
        <Route path={`${path}/login`} exact>
          <Login />
        </Route>
        <Route path={`${path}/find-password`} exact>
          <FindPassword />
        </Route>
        <Route path={`${path}/*`}>
          <Redirect to={path} />
        </Route>
      </Switch>
    </AuthLayout>
  );
};
