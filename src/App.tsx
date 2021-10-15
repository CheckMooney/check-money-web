import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainRouter } from './routers/MainRouter';
import { DashboardRouter } from './routers/DashboardRouter';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <DashboardRouter />
        </Route>
        <Route path="/">
          <MainRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
