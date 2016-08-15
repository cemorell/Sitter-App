import React from 'react';
import Navbar from './navbar';




class AllContainer extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    console.log('herro');
    return (
    <div>
      <p>HELLO</p>
      <Navbar />
    </div>
    )
  }
};

export default AllContainer;
