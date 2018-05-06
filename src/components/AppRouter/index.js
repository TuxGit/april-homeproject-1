import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; // { Switch, Route, Redirect }
import styled from 'styled-components';

import PrivateRoute from '../PrivateRouter';
import Login from '../Login';
import UserPage from '../UserPage';
import HomePage from '../HomePage';
import Header from '../Header';

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

class AppRouter extends Component {
  render () {

    return (
      <AppContainer>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route exact path="/" render={() => (
            isAuthorized
            ? <Redirect to="/users/me"/>
            : <Redirect to="/login"/>
          )}/> */}
          <PrivateRoute path="/users/:login" component={UserPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </AppContainer>
    );
  }
}

export default AppRouter;
