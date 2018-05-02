import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';

import { fetchRequest, getData, getIsFetching } from '../../ducks/followers';
import Follower from '../Follower';
import './style.css';

class Folowers extends PureComponent {

  componentDidMount () {
    console.log('Folowers: componentDidMount', this.props);
    const login = this.props.login;

    if (login) {
      this.props.fetchRequest(login);
    }
  }

  render () {
    console.log('Folowers: render', this.props);
    const { followers, isFetching } = this.props;

    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    } else if (!followers) {
      return null;
    }

    return (
      <div className="folowers">
        {followers.map(item =>
          <Follower
            key={item.id}
            login={item.login}
            avatarUrl={item.avatar_url}
          />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    followers: getData(state),
    isFetching: getIsFetching(state)
  }),
  { fetchRequest }
)(Folowers);
