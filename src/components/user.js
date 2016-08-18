import React from 'react';

class User extends React.Component {
  constructor(){
    super();
  }

  render(){
      return (
        <div className="sitters col-xs-12 col-md-3">
          <img src={ this.props.object.image_url }  />
          <h3>{ this.props.object.nickname }</h3>
          <p>First name: { this.props.object.firstname }</p>
          <p>Age: { this.props.object.age }</p>
          <p>city: { this.props.object.city }</p>
          <p>{ this.props.object.email }</p>
        </div>
        )
  }
}

export default User;
