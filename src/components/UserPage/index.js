import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getRequest, getResult } from '../../ducks/users';
import './style.css';

class UserPage extends PureComponent {

  componentDidMount () {
    this.props.getRequest();
  }

  render () {
    const { user } = this.props;

    if (!user) { return null; }

    return (
      <div className="user">
        <div className="user__pic">
          <img className="user__pic-img" src={user.avatar_url} alt={user.login}/>
        </div>
        <div className="user__info">
          <h3>{user.login}</h3>
          <p>Followers: {user.followers}</p>
          <p>Public repos: {user.public_repos}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getResult(state)
  }),
  { getRequest }
)(UserPage);
