import React from 'react';

class Requester extends React.Component {

//camille has initialized this class with properties including a request object
    constructor(props){
      super(props);

      //with that request object, go get the sending user
      $.ajax({
        method: "GET",
        url: "/users/" + this.props.object.sender_id,
        dataType: 'json'
      })
      .done(function(data){
        console.log(data)
        this.state = {
          sender: data
        };
      }.bind(this))
      .fail(function(error){
        console.log(error);
      })
    }

  _confirm(event){
    event.preventDefault();
    var id = this.props.object._id;
    $.ajax({
      method: "PATCH",
      url: "/requests/" + id + "/accept",
      dataType: 'json'
    })
    .done(function(data){
      console.log(data)
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
  }

    _deny(event){
    event.preventDefault();
    var id = this.props.object._id;
    $.ajax({
      method: "PATCH",
      url: "/requests/" + id + "/deny",
      dataType: 'json'
    })
    .done(function(data){
      console.log(data)
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
  }

  render(){
      return (
        <div className="requestshere">
          <button onClick={ this._confirm.bind(this) }>Confirm request</button>
          <button onClick={ this._deny.bind(this) }>Deny request</button>
        </div>
      )
  }
}

export default Requester;
