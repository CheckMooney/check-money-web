import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import DashboardLayout from 'layouts/DashboardLayout';
import { DashboardPage } from 'pages/dashboard';

export const DashboardRouter = () => {
  let { path } = useRouteMatch();
  return (
    <DashboardLayout>
      <Switch>
        <Route path={path} exact>
          <DashboardPage />
        </Route>
        <Route path={`${path}/*`}>
          <Redirect to={path} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};
