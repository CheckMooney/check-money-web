import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FindPasswordPage, LoginPage, RegisterPage } from 'pages/auth';

export const AuthRouter = () => {
  let { path } = useRouteMatch();
  return (
    <AuthLayout>
      <Switch>
        <Route path={`${path}/register`} exact>
          <RegisterPage />
        </Route>
        <Route path={`${path}/login`} exact>
          <LoginPage />
        </Route>
        <Route path={`${path}/find-password`} exact>
          <FindPasswordPage />
        </Route>
      </Switch>
    </AuthLayout>
  );
};
