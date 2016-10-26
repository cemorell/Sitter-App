import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
  }


  render(){
      return (
        <div className="profile">
          <div className="firstpart col-s-12 col-md-6">
            <img className="img-rounded" src={this.props.currentUser.image_url} />
            <h4>{ this.props.currentUser.nickname }</h4>
            <h4>{this.props.currentUser.city} {this.props.currentUser.state}</h4>
            <h4>{this.props.currentUser.gender} {this.props.currentUser.age}</h4>
          </div>
          <div className="secondpart col-s-12 col-md-6">
            <h2>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</h2>
            <p>{this.props.currentUser.aboutme}</p>
            <p>{this.props.currentUser.experience}</p>
            <p>{this.props.currentUser.kids_info}</p>
          </div>
        </div>
        )
  }
}

export default Profile;
