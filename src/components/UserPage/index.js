import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';

import { fetchRequest, getData, getIsFetching } from '../../ducks/users';
import Followers from '../Followers';
import './style.css';

class UserPage extends PureComponent {

  componentDidMount () {
    console.log('UserPage: componentDidMount', this.props);
    const userLogin = this.props.match.params.login;

    this.loadData(userLogin);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('UserPage: componentDidUpdate', this.props);
    const userLogin = this.props.match.params.login;

    if (this.props.match.params.login !== prevProps.match.params.login) {
      this.loadData(userLogin);
    }
  }

  loadData (userLogin) {
    console.log('UserPage: loadData');

    if (userLogin === 'me') {
      this.props.fetchRequest();
    } else if (userLogin) {
      this.props.fetchRequest(userLogin);
    }
  }

  render () {
    console.log('UserPage: render', this.props);
    const { user, isFetching } = this.props;

    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    } else if (!user) {
      return null;
    }

    return (
      <React.Fragment>
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
        <Followers login={user.login} />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    user: getData(state),
    isFetching: getIsFetching(state)
  }),
  { fetchRequest }
)(UserPage);
