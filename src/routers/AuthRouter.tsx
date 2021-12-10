import React from 'react';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import FindPasswordPage from 'pages/FindPasswordPage/FindPasswordPage';
import ResendCodePage from 'pages/ResendCodePage/ResendCodePage';

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
        <Route path={`${path}/resend-code`} exact>
          <ResendCodePage />
        </Route>
      </Switch>
    </AuthLayout>
  );
};
