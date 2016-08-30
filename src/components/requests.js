import React from 'react';
import Requester from './requester';




class Requests extends React.Component {

    constructor(){
      super();
    }



  render(){
      return (
        <div>
        <h2> Recent Requests</h2>
           { this.props.requests.map((reqObject, index) => <Requester object={reqObject} key={index} />) }
        </div>
      )
  }
}

export default Requests;
