import React from 'react';

class Edit extends React.Component {

_handleSubmit(event){
  event.preventDefault();
    var id = this.props.jokeId;
    $.ajax({
      method: 'PATCH',
      url: '/edit',
      dataType: 'json'
    })
    .done(function(data){
      this.props.edit(data);
    }.bind(this));
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input ref="firstname" placeholder="first name" type="text" />
        <input ref="lastname" placeholder="last name" type="text" />
        <input ref="sitter" placeholder="are you a sitter?" type="text" />
        <input ref="firstname" type="text" />
        <input type="submit" value="Update" />
      </form>
    )
  }

}

export default Edit;
