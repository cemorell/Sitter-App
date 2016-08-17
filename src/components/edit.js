import React from 'react';

class Edit extends React.Component {

  _handleSubmit(event){
    event.preventDefault();
    let firstname = this.refs.firstname.value;
    let lastname = this.refs.lastname.value;
    let sitter =  this.refs.sitter.value;
    let age = this.refs.age.value;

    // let updatedProfile = {
    //   firstname: this.refs.firstname.value,
    //   lastname: this.refs.lastname.value,
    //   sitter:  this.refs.sitter.value,
    //   age: this.refs.age.value,
    // };
    console.log(firstname)
    $.ajax({
      method: 'PATCH',
      url: '/edit',
      data: {firstname: firstname, lastname: lastname},
      dataType: 'json'
    })
    .done(function(data){
      console.log(data);
      this.props.edit(data);
    }.bind(this));
  }

  render(){
    return (
      <div className="form">
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input ref="firstname" placeholder="first name" type="text" />
        <input ref="lastname" placeholder="last name" type="text" />
        <input ref="sitter" placeholder="are you a sitter?" type="text" />
        <input ref="city" placeholder="are you a sitter?" type="text" />
        <input ref="state" placeholder="state" type="text" />
        <input ref="image_url" placeholder="image url" type="text" />
        <input ref="age" type="text" />
        <input type="submit" value="Update" />
      </form>
      </div>
    )
  }

}

export default Edit;
