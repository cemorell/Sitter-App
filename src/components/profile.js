import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
  }

  render(){
      return (
        <div className="profile col-xs-12 col-md-8">
          <h3>{ this.props.currentUser.nickname }</h3>
          <p>{this.props.currentUser.firstname}</p>
          <p>{this.props.currentUser.lastname}</p>
          <p>{this.props.currentUser.age}</p>
          <p>{this.props.currentUser.city}</p>
        </div>
        )
  }
}

export default Profile;
