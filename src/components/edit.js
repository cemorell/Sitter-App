import React from 'react';

class Edit extends React.Component {



  _handleSubmit(event){
    event.preventDefault();
    let firstname = this.refs.firstname.value;
    let lastname = this.refs.lastname.value;
    let sitter =  this.refs.sitter.value;
    let age = this.refs.age.value;
    let city = this.refs.city.value;
    let state = this.refs.state.value;
    let gender = this.refs.gender.value;
    let image_url = this.refs.image_url.value;
    let email = this.refs.email.value;


    // let updatedProfile = {
    //   firstname: this.refs.firstname.value,
    //   lastname: this.refs.lastname.value,
    //   sitter:  this.refs.sitter.value,
    //   age: this.refs.age.value,
    // };
    console.log(image_url)
    $.ajax({
      method: 'PATCH',
      url: '/edit',
      data: {firstname: firstname, lastname: lastname, age: age, sitter: sitter, city:city, state:state, image_url:image_url, gender: gender, email:email },
      dataType: 'json'
    })
    .done(function(data){
      console.log(data);
      this.props.edit(data);
    }.bind(this));
  }

  render(){
    return (
      <div className="container">
      <form role="form" className="form-horizontal" onSubmit={ this._handleSubmit.bind(this) }>

      <label className="col-sm-4 control-label">Are you a sitter or parent?</label>
      <select className="col-sm-4 form-control" ref="sitter">
            <option className="col-sm-4" ref="sitter" defaultValue={ this.props.currentUser.sitter } value="sitter"> Sitter</option>
            <option className="col-sm-4" ref="sitter" defaultValue={ this.props.currentUser.sitter } value="parent"> Parent</option>
      </select>


      <div className="space col-sm-12"></div>

       <div className="form-group">
          <label className="col-sm-2 control-label">First Name</label>
          <div className="col-sm-4"><input type="text" className="form-control" ref="firstname" placeholder="first name" defaultValue={ this.props.currentUser.firstname } /></div>
          <label className="col-sm-2 control-label">Last Name</label>
          <div className="col-sm-4"><input type="text" className="form-control" ref="lastname" placeholder="last name" defaultValue={ this.props.currentUser.lastname } /></div>
        </div>


        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" ref="email" placeholder="email?" defaultValue={ this.props.currentUser.email } type="text" />
            </div>
        </div>



        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">City</label>
            <div className="col-sm-4">
             <input type="email" className="form-control" id="inputEmail3" ref="city" placeholder="city" defaultValue={ this.props.currentUser.city } type="text" />
            </div>

          <label for="inputEmail3" className="col-sm-2 control-label">State</label>
            <div className="col-sm-4">
              <input ref="state" className="form-control" placeholder="state" defaultValue={ this.props.currentUser.state } type="text" />
            </div>
        </div>

        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">Image Url</label>
            <div className="col-sm-10">
              <input className="form-control" ref="image_url" placeholder="image url" defaultValue={ this.props.currentUser.image_url } type="text" />
            </div>
         </div>

         <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">age</label>
            <div className="col-sm-2">
              <input className="form-control" ref="age" placeholder="age" type="text" defaultValue={ this.props.currentUser.age } />
            </div>
            <label className="col-sm-2 control-label"> Gender</label>
          <label className="radio-inline">
            <input ref="gender" type="radio" id="optionsRadios2" name="gender" value="male" /><p> male </p>
          </label>

          <label className="radio-inline">
            <input ref="gender" type="radio" id="optionsRadios1" name="gender" value="female" /><p>female</p>
          </label>

          <label className="radio-inline">
            <input ref="gender" type="radio" id="optionsRadios3" name="gender" value="none" /><p>prefer not to answer</p>
          </label>

        </div>

        <div className="col-sm-2"></div>
        <input className="btn btn-default animated pulse" type="submit" value="Update" />
      </form>
    </div>
    )
  }

}

export default Edit;
