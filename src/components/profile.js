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
            <p>{this.props.currentUser.city} {this.props.currentUser.state}</p>
            <p>{this.props.currentUser.gender} {this.props.currentUser.age}</p>
           </div>
          <div className="secondpart col-s-12 col-md-6">
            <p>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</p>
            <p>{this.props.currentUser.aboutme}</p>
            <p>{this.props.currentUser.experience}</p>
            <p>{this.props.currentUser.kids_info}</p>
          </div>
        </div>
        )
  }
}

export default Profile;
