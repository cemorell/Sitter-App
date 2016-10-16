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
        <div className="flip-container sitters col-xs-12 col-md-3" ontouchstart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
              <img className="img-rounded" src={ this.props.object.image_url }  />
              <h3>{ this.props.object.firstname }</h3>
              <h4>username: { this.props.object.nickname }</h4>
              <h4>Age: { this.props.object.age }</h4>
              <h4>Gender: { this.props.object.gender }</h4>
              <h4>city: { this.props.object.city }</h4>
            </div>
            <div className="back">
              <h4>About { this.props.object.firstname }</h4>
              <p>{ this.props.object.aboutme }</p>
              <h4> { this.props.object.firstname }'s Experience </h4>
              <p>{ this.props.object.experience }</p>
              <button className="btn btn-info" onClick={ this._handleClick.bind(this) } ref={ this.props.object._id }>Request me</button>
            </div>
          </div>
        </div>
        )
  }
}

export default User;
