import React from 'react';

class Requester extends React.Component {

    constructor(){
      super();
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
          <button onClick={ this._deny.bind(this) }>Confirm request</button>
        </div>
      )
  }
}

export default Requester;
