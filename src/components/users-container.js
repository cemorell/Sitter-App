import React from 'react';
import User from './user';

class UsersContainer extends React.Component {
    constructor(){
    super();
  }

  render(){
      return (
        <div>
          { this.props.users.map((userObject, index) => <User object={userObject} key={index} />) }
        </div>
      )
  }
}

export default UsersContainer;
