import React from 'react';
import Navbar from './navbar';
import UsersContainer from './users-container';
import Profile from './profile';
import Edit from './edit';
import Requests from './requests';
import Matches from './matches';




class AllContainer extends React.Component {

 constructor(){
    super();
    this.state = {
      users: [],
      currentDiv: 'profile',
      currentUser: {},
      myRequests: [],
      myMatches: [],
      values: {
        min: 12,
        max: 99,
      }
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
      console.log(data)
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
    $.ajax({
      url: '/requests',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      this.setState({myRequests: data});
      console.log(data);
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
    $.ajax({
      url: '/matches',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      this.setState({myMatches: data});
      console.log(data);
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
  }

  // Client side changes for current user in 'edit'
  edit(info){
    console.log('editing ' + info);
    this.setState({currentUser: info});
  }

  // Slider function to change age range
    handleValuesChange(component, values) {
    this.setState({
      values: values,
    });
  }

  //Nav bar control as I just found out about React Router
  _showDiv(){
    if (this.state.currentDiv === 'all'){
      return (<div><UsersContainer users={ this.state.users } /></div>);
    }
    else if (this.state.currentDiv === 'profile'){
      return (<div><Profile currentUser={ this.state.currentUser } /></div>);
    }
    else if (this.state.currentDiv === 'edit'){
      return (<div><Edit changeCurrentDiv={ this._changeCurrentDiv.bind(this) } edit={ this.edit.bind(this) } currentUser={ this.state.currentUser } /></div>);
    }
    else if (this.state.currentDiv === 'requests'){
      return (<div><Requests requests={ this.state.myRequests } /></div>);
    }
    else if (this.state.currentDiv === 'matches'){
      return (<div><Matches matches={ this.state.myMatches } /></div>);
    }
    else {
      return (<h1>Hello Ya Goon</h1>)
    }
  };

  //Handles the NAV bar changes
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
