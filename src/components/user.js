import React from 'react';

class User extends React.Component {
  constructor(){
    super();
    this.state = {upvotes: 0};
  }

    _handleClick(event){
    event.preventDefault();
    var confirmed = confirm("You want to request " +  this.props.object.nickname  + "?");
    if (confirmed){
      var id = this.props.object._id;
      $.ajax({
        method: "POST",
        url: "/users/" + id + "/request",
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
  }



  render(){
      return (
        <div className="animated shake sitters col-xs-12 col-md-3">
          <img className="img-rounded" src={ this.props.object.image_url }  />
          <h3>{ this.props.object.nickname }</h3>
          <p>First name: { this.props.object.firstname }</p>
          <p>Age: { this.props.object.age }</p>
          <p>city: { this.props.object.city }</p>
          <button className="btn btn-default" onClick={ this._handleClick.bind(this) } ref={ this.props.object._id }>Request me</button>
        </div>
        )
  }
}

export default User;
