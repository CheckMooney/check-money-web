import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Dashboard } from '../pages/Dashboard';
import { Today } from '../pages/Today';

export const DashboardRouter = () => {
  let { path } = useRouteMatch();
  return (
    <DashboardLayout>
      <Switch>
        <Route path={path} exact>
          <Dashboard />
        </Route>
        <Route path={`${path}/today`}>
          <Today />
        </Route>
        <Route path={`${path}/*`}>
          <Redirect to={path} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};
