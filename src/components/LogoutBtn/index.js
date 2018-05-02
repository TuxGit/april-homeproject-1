import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIsAuthorized, logout } from '../../ducks/auth';

const styles = {
  width: '400px',
  margin: '50px auto 20px',
  textAlign: 'center'
};

class LogoutBtn extends PureComponent {
  onClickHandler = () => {
    this.props.logout();
  }

  render () {
    const { isAuthorized } = this.props;

    if (!isAuthorized) { return null; }

    return (
      <div style={styles}>
        <button onClick={this.onClickHandler}>Logout</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state)
  }),
  { logout }
)(LogoutBtn);
