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
      data: {firstname: firstname, lastname: lastname, age: age },
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
        <input ref="firstname" placeholder="first name" defaultValue={ this.props.currentUser.firstname } type="text" />
        <input ref="lastname" placeholder="last name" defaultValue={ this.props.currentUser.lastname } type="text" />
        <input ref="sitter" placeholder="are you a sitter?" defaultValue={ this.props.currentUser.sitter } type="text" />
        <input ref="city" placeholder="city" defaultValue={ this.props.currentUser.city } type="text" />
        <input ref="state" placeholder="state" defaultValue={ this.props.currentUser.state } type="text" />
        <input ref="image_url" placeholder="image url" defaultValue={ this.props.currentUser.image_url } type="text" />
        <input ref="age" placeholder="age" type="text" defaultValue={ this.props.currentUser.age } />
        <input type="radio" name="gender" value="male" /><p> male </p>
        <input type="radio" name="gender" value="female" /><p>female</p>
        <input type="radio" name="gender" value="other" /><p>other</p>
        <input type="submit" value="Update" />
      </form>
    </div>
    )
  }

}

export default Edit;
