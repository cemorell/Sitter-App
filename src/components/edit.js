import React from 'react';

class Edit extends React.Component {

_handleClick(){
    var id = this.props.jokeId;
    $.ajax({
      method: "PATCH",
      url: "/"
      dataType: 'json'
    })
    .done(function(data){
      this.props.upvote();
    }.bind(this));
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input ref="newJokeText" type="text" />
        <input type="submit" value="Update" />
      </form>
    )
  }

}

export default Edit;
