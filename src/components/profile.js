import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
  }

  render(){
      return (
        <div>
          <h3>{ this.props.currentUser.nickname }</h3>
        </div>
        )
  }
}

export default Profile;
