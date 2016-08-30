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
      url: "/requests/" + id + "/send",
      dataType: 'json'
    })
    .done(function(data){
      this.setState({upvotes: 25});
      console.log(data)
    }.bind(this))
    .fail(function(error){
      console.log(error);
      console.log(id);
    })
  }

  render(){
      return (
        <div className="requestshere">
          <img src={ this.props.object.image_url }  />
          <h3>{ this.props.object.age }</h3>
          <p>{ this.props.object.firstname }</p> <p>{ this.props.object.lastname }</p>
          <p>{ this.props.object.city }</p>
          <button onClick={ this._confirm.bind(this) } ref={ this.props.object._id }>Confirm request</button>
          <button onClick={ this._deny.bind(this) } ref={ this.props.object._id }>Deny request</button>
        </div>
      )
  }
}

export default Requester;
