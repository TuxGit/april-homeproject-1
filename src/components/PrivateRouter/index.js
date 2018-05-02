import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getIsAuthorized } from '../../ducks/auth';

class PrivateRoute extends PureComponent {
  render () {
    const { isAuthorized, path, component } = this.props;

    return !isAuthorized
      ? <Redirect to="/login" />
      : <Route to={path} component={component} />;
  }
}

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state)
  })
)(PrivateRoute);
