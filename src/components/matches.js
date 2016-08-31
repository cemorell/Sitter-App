import React from 'react';
import Matcher from './matcher';



class Matches extends React.Component {

    constructor(){
      super();
    }

  render(){
      return (
        <div>
        <h2> Matches</h2>
           { this.props.matches.map((matchObject, index) => <Matcher object={matchObject} key={index} currentUser={this.props.currentUser} />) }
        </div>
      )
  }
}

export default Matches;
