import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Follower extends PureComponent {

  render () {
    const { login, avatarUrl } = this.props;

    return (
      <div className="folower">
        <div className="folower__pic">
          <img className="folower__pic-img" src={avatarUrl} alt={login}/>
        </div>
        <div className="folower__info">
          <Link to={`/user/${login}`}>
            <h3>{login}</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Follower;
