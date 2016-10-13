import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
  }




  render(){
      return (
        <div className="profile col-xs-12 col-md-12">
          <img className="img-rounded" src={this.props.currentUser.image_url} height="270" />
          <h4>{ this.props.currentUser.nickname }</h4>
          <p>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</p>
          <p>{this.props.currentUser.age}</p>
          <p>{this.props.currentUser.city} {this.props.currentUser.state}</p>
          <p>{this.props.currentUser.gender} {this.props.currentUser.age}</p>

        </div>
        )
  }
}

export default Profile;
