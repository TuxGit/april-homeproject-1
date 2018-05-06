import React, { PureComponent } from 'react';

class LogoutBtn extends PureComponent {
  onClickHandler = () => {
    this.props.logout();
  }

  render () {
    return (
      <button onClick={this.onClickHandler}>Logout</button>
    );
  }
}

export default LogoutBtn;
