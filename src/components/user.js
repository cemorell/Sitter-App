import React from 'react';

class User extends React.Component {
  constructor(){
    super();
  }

  render(){
      return (
        <div>
          <h3>{ this.props.object.nickname }</h3>
          <p>{ this.props.object.firstname }</p>
          <p>{ this.props.object.age }</p>
        </div>
        )
  }
}

export default User;
