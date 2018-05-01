import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authorize, getIsAuthorized } from '../../ducks/auth';

class Login extends PureComponent {
  state = {
    authToken: ''
  }

  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ authToken: value });
  }

  onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter pressed');
      this.props.authorize(this.state.authToken);
    }
  }

  render () {
    const { authToken } = this.state;
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <p>Получить токен нужно на своей странице github, перейдите по <a href="https://github.com/settings/tokens">адресу</a> и создать себе токен. Запишите куда нибудь токен, так как после создания доступ к нему будет только один раз.</p>
        <input placeholder="auth_token"
          value={authToken}
          onChange={this.onChangeHandler}
          onKeyPress={this.onKeyPressHandler}
        />
        <p>После ввода нажать Enter</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state)
  }),
  { authorize }
)(Login);
