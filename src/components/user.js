import React from 'react';

class User extends React.Component {
  constructor(){
    super();
  }

  render(){
      return (
        <div>
          <h3>{ this.props.object.nickname }</h3>
        </div>
        )
  }
}

export default User;
