import React from 'react';

class Requester extends React.Component {

//camille has initialized this class with properties including a request object
    constructor(props){
      super(props);
      this.state= {
        sender:{},
        display: true
      }
    }

    componentWillMount(){
      //with that request object, go get the sending user
      $.ajax({
        method: "GET",
        url: "/users/" + this.props.object.sender_id,
        dataType: 'json'
      })
      .done(function(data){
        console.log(data)
        this.setState({sender: data[0]});
      }.bind(this))
      .fail(function(error){
        console.log(error);
      })
    }

  _confirm(event){
    event.preventDefault();
    var confirmed = confirm("Are you sure you want to accept?");
    if (confirmed){
      var id = this.props.object._id;
      $.ajax({
        method: "PATCH",
        url: "/requests/" + id + "/accept",
        dataType: 'json'
      })
      .done(function(data){
        console.log(data)
        this.setState({display: false});
      }.bind(this))
      .fail(function(error){
        console.log(error);
      })
    }
  }

    _deny(event){
    event.preventDefault();
    var confirmed = confirm("Are you sure you want to deny?");
    if (confirmed){
      var id = this.props.object._id;
      $.ajax({
        method: "PATCH",
        url: "/requests/" + id + "/deny",
        dataType: 'json'
      })
      .done(function(data){
        console.log(data)
        this.setState({display: false});
      }.bind(this))
      .fail(function(error){
        console.log(error);
      })
    }
  }


  render(){
    if (this.state.display){
      return (
        <div className="requestshere">
        <h1> { this.state.sender.nickname } </h1>
          <button onClick={ this._confirm.bind(this) }>Confirm request</button>
          <button onClick={ this._deny.bind(this) }>Deny request</button>
        </div>);
      } else {
      return false;
    }
  }
}

export default Requester;
