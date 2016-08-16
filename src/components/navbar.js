import React from 'react';



class Navbar extends React.Component {
 constructor(props){
    super(props);
  }



  render(){
    return (
    <div id="nav">

  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/#">CAMILLE</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">All Sitters <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Edit Profile</a></li>
        <li><a href="#">Match Requests</a></li>
        <li><a href="#">Matches</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>

    <div id="container"></div>


    </div>
    )
  }
}

export default Navbar;
