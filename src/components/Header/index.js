import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIsAuthorized, logout } from '../../ducks/auth';
import { getErrorMessage } from '../../ducks/network';
import LogoutBtn from '../LogoutBtn';

const styles = {
  margin: '10px auto 40px',
  textAlign: 'center'
};

class Header extends PureComponent {
  render () {
    const { isAuthorized, errorMessage, logout } = this.props;

    return (
      <div style={styles}>
        { isAuthorized && <LogoutBtn logout={logout} /> }
        { errorMessage && <p style={{color: 'red'}}>{errorMessage}</p> }
      </div>
    );
  }
}

export default connect(
  state => ({
    errorMessage: getErrorMessage(state),
    isAuthorized: getIsAuthorized(state)
  }),
  { logout }
)(Header);
