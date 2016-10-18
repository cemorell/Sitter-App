import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
  }


  render(){
      return (
        <div className="profile">
          <div className="profileone col-xs-12 col-md-6">
            <img className="img-rounded" src={this.props.currentUser.image_url} height="270" />
            <h4>{ this.props.currentUser.nickname }</h4>
            <p>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</p>
            <p>{this.props.currentUser.age}</p>
            <p>{this.props.currentUser.city} {this.props.currentUser.state}</p>
            <p>{this.props.currentUser.gender} {this.props.currentUser.age}</p>
           </div>
          <div className="profiletwo col-xs-12 col-md-6">
            <p>{this.props.currentUser.aboutme}</p>
            <p>{this.props.currentUser.experience}</p>
            <p>{this.props.currentUser.kids_info}</p>
          </div>
        </div>
        )
  }
}

export default Profile;
