import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainRouter } from './routers/MainRouter';
import { DashboardRouter } from './routers/DashboardRouter';
import { AuthRouter } from './routers/AuthRouter';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <DashboardRouter />
        </Route>
        <Route path="/auth">
          <AuthRouter />
        </Route>
        <Route path="/">
          <MainRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
