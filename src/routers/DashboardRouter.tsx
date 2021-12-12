import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import DashboardLayout from 'layouts/DashboardLayout';
import TodayPage from 'pages/TodayPage/TodayPage';
import AccountPage from 'pages/AccountPage/AccountPage';
import MonthPage from 'pages/MonthPage/MonthPage';

export const DashboardRouter = () => {
  let { path } = useRouteMatch();

  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${path}/today`} exact>
          <TodayPage />
        </Route>
        <Route path={`${path}/month`} exact>
          <MonthPage />
        </Route>
        <Route path={`${path}/account/:accountId`} exact>
          <AccountPage />
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/today`} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};
