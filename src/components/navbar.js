import React from 'react';



class Navbar extends React.Component {
 constructor(props){
    super(props);
  }

  _handleClick(id, event){
    event.preventDefault();
    this.props.changeCurrentDiv(id);
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
      <a onClick={ this._handleClick.bind(this, 'profile') } className="navbar-brand" href="/profile">Profile</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a onClick={ this._handleClick.bind(this, 'all') } href="/users">All Sitters <span className="sr-only">(current)</span></a></li>
        <li><a onClick={ this._handleClick.bind(this, 'edit') } href="/edit">Edit Profile</a></li>
        <li><a onClick={ this._handleClick.bind(this, 'requests') }href="/">Requests</a></li>
        <li><a onClick={ this._handleClick.bind(this, 'matches') } href="/">Matches</a></li>
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
