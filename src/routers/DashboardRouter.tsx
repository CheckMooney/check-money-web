import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import DashboardLayout from 'layouts/DashboardLayout';
import { TodayPage } from 'pages/TodayPage/TodayPage';

export const DashboardRouter = () => {
  let { path } = useRouteMatch();
  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${path}/today`} exact>
          <TodayPage />
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/today`} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};
