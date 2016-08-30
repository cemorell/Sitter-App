import React from 'react';
import Requester from './requester';




class Requests extends React.Component {

    constructor(){
      super();
    }



  render(){
      return (
        <div>
           { this.props.myrequests.map((reqObject, index) => <Joke object={reqObject} key={index} />) }
        </div>
      )
  }
}

export default Requests;
