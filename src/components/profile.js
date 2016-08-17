import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
  }

  render(){
      return (
        <div>
          <h3>{ this.props.currentUser.nickname }</h3>
          <p>{this.props.currentUser.firstname}</p>
          <p>{this.props.currentUser.lastname}</p>
        </div>
        )
  }
}

export default Profile;
