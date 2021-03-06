import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainRouter } from './routers/MainRouter';
import { DashboardRouter } from './routers/DashboardRouter';
import { AuthRouter } from './routers/AuthRouter';
import { requestCheckAccessToken } from 'services/requests';
import { useUserContext } from 'contexts/UserContext';
import LoadingWithLogo from 'components/common/LoadingWithLogo/LoadingWithLogo';

function App() {
  const { isLoggedIn, silentRefresh, logout } = useUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        await requestCheckAccessToken();
        silentRefresh();
      } catch (error) {
        logout();
      }
      setIsLoading(false);
    })();
  }, [silentRefresh, logout]);

  if (isLoading) {
    return <LoadingWithLogo />;
  }

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
