import React from 'react';

class Requester extends React.Component {

    constructor(props){
      super(props);

    }


  render(){
      return (
        <div className="matcher">
        <h1> { this.props.object.nickname } </h1>
        </div>
        );
      }
}

export default Requester;
