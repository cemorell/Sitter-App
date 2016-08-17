import React from 'react';
import Navbar from './navbar';
import UsersContainer from './users-container';
import Profile from './profile';
import Edit from './edit';


class AllContainer extends React.Component {

 constructor(){
    super();
    this.state = {
      users: [],
      currentDiv: 'all',
      currentUser: {}
    };
  }

  componentWillMount(){
    $.ajax({
      url: '/users',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      this.setState({users: data});
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
    $.ajax({
      url: '/profile',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      this.setState({currentUser: data});
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
  }
  edit(info){
    console.log('editing ' + info);
    this.setState({currentUser: info});
  }

  _showDiv(){
    if (this.state.currentDiv === 'all'){
      return (<div><UsersContainer users={ this.state.users } /></div>);
    }
    else if (this.state.currentDiv === 'profile'){
      return (<div><Profile currentUser={ this.state.currentUser } /></div>);
    }
    else if (this.state.currentDiv === 'edit'){
      return (<div><Edit edit={ this.edit.bind(this) } /></div>);
    }
    else if (this.state.currentDiv === 'requests'){
      return (<h1>Request ME</h1>);
    }
    else if (this.state.currentDiv === 'matches'){
      return (<h1>MATCH ME ME</h1>);
    }
    else {
      return (<h1>Hello Ya Goon</h1>)
    }
  };

  _changeCurrentDiv(key){
    this.setState({currentDiv: key});
  }

  render(){
    return (
    <div>
      <Navbar changeCurrentDiv={ this._changeCurrentDiv.bind(this) }/>
      { this._showDiv() }
    </div>
    )
  }
};

export default AllContainer;
