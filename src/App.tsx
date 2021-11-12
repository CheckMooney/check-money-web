import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainRouter } from './routers/MainRouter';
import { DashboardRouter } from './routers/DashboardRouter';
import { AuthRouter } from './routers/AuthRouter';
import { requestGetSelfProfile } from 'services/requests';
import { useUserContext } from 'contexts/UserContext';

function App() {
  const { isLoggedIn, silentRefresh, logout } = useUserContext();

  useEffect(() => {
    (async () => {
      try {
        await requestGetSelfProfile();
        silentRefresh();
      } catch (error) {
        logout();
      }
    })();
  }, [silentRefresh, logout]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          {isLoggedIn ? <DashboardRouter /> : <Redirect to="/" />}
        </Route>
        <Route path="/auth">
          {!isLoggedIn ? <AuthRouter /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/">
          {!isLoggedIn ? <MainRouter /> : <Redirect to="/dashboard" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
