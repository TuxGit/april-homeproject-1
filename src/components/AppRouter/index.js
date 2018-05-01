import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; // { Switch, Route, Redirect }

import PrivateRoute from '../PrivateRouter';
import Login from '../Login';
import UserPage from '../UserPage';
import HomePage from '../HomePage';

class AppRouter extends Component {
  render () {

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route exact path="/" render={() => (
            isAuthorized
            ? <Redirect to="/users/me"/>
            : <Redirect to="/login"/>
          )}/> */}
          <PrivateRoute path="/users/me" component={UserPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
