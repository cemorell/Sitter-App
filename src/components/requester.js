import React from 'react';

class Requester extends React.Component {

    constructor(){
      super();
    }



  render(){
      return (
        <div className="requestshere">
          <h3>{ this.props.object.age }</h3>
        </div>
      )
  }
}

export default Requester;
