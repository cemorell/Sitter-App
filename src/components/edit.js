import React from 'react';

class Edit extends React.Component {



  _handleSitterSubmit(event){
    event.preventDefault();

    let firstname = this.refs.firstname.value;
    let lastname = this.refs.lastname.value;
    let age = this.refs.age.value;
    let city = this.refs.city.value;
    let state = this.refs.state.value;
    let image_url = this.refs.image_url.value;
    let email = this.refs.email.value;
    let about = this.refs.about.value;
    let experience = this.refs.experience.value;

    console.log(image_url)
    $.ajax({
      method: 'PATCH',
      url: '/edit',
      data: {firstname: firstname, lastname: lastname, age: age, city:city, state:state, image_url:image_url, email:email, aboutme:about, experience: experience },
      dataType: 'json'
    })
    .done(function(data){
      console.log(data);
      this.props.edit(data);
      this.props.changeCurrentDiv('profile');
    }.bind(this));
  }


    _handleParentSubmit(event){
    event.preventDefault();

    let firstname = this.refs.firstname.value;
    let lastname = this.refs.lastname.value;
    let age = this.refs.age.value;
    let city = this.refs.city.value;
    let state = this.refs.state.value;
    let image_url = this.refs.image_url.value;
    let email = this.refs.email.value;
    let about = this.refs.about.value;
    let kids_info = this.refs.kids_info.value;

    console.log(image_url)
    $.ajax({
      method: 'PATCH',
      url: '/edit',
      data: {firstname: firstname, lastname: lastname, age: age, city:city, state:state, image_url:image_url, email:email, aboutme:about, kids_info: kids_info  },
      dataType: 'json'
    })
    .done(function(data){
      console.log(data);
      this.props.edit(data);
      this.props.changeCurrentDiv('profile');
    }.bind(this));
  }

_firstSubmit(event){
    event.preventDefault();

    let sitter =  this.refs.sitter.value;
    let gender = this.refs.gender.value;

    $.ajax({
      method: 'PATCH',
      url: '/edit',
      data: { sitter: sitter, gender: gender },
      dataType: 'json'
    })
    .done(function(data){
      console.log("WORKIN 4 CAMILLE");
      this.props.edit(data);
    }.bind(this));
  }



  render(){
        if (this.props.currentUser.sitter === "parent"){
    return (
      <div className="container">
      <form role="form" className="form-horizontal" onSubmit={ this._handleParentSubmit.bind(this) }>


      <div className="space col-sm-12"></div>

       <div className="form-group">
          <label className="col-sm-2 control-label">First Name</label>
          <div className="col-sm-4"><input type="text" className="form-control" ref="firstname" placeholder="Parent!!" defaultValue={ this.props.currentUser.firstname } /></div>
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
        </div>
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">about me</label>
            <div className="col-sm-9">
              <input className="form-control" ref="about" placeholder="Tell us a little about you, the parent. Consider parenting styles or what you're looking for in a sitter ect." type="textarea" defaultValue={ this.props.currentUser.aboutme } />
            </div>
        </div>
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">Kids</label>
            <div className="col-sm-9">
              <input className="form-control" ref="kids_info" placeholder="Tell us a litte about your kids! Ages, names any allergies or special info" type="textarea" defaultValue={ this.props.currentUser.kids_info } />
            </div>
        </div>


        <div className="col-sm-2"></div>
        <input className="btn btn-default animated pulse" type="submit" value="Update" />
      </form>
    </div>);

  } else if (this.props.currentUser.sitter === "sitter"){
    return (
      <div className="container">
      <form role="form" className="form-horizontal" onSubmit={ this._handleSitterSubmit.bind(this) }>


      <div className="space col-sm-12"></div>

       <div className="form-group">
          <label className="col-sm-2 control-label">First Name</label>
          <div className="col-sm-4"><input type="text" className="form-control" ref="firstname" placeholder="SITTER" defaultValue={ this.props.currentUser.firstname } /></div>
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
        </div>
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">about me</label>
            <div className="col-sm-9">
              <input className="form-control" ref="about" placeholder="Tell us a little about youreself. Things to consider: times you are availible. why you want to babysit. Your job/student life." type="textarea" defaultValue={ this.props.currentUser.aboutme } />
            </div>
        </div>
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">Experience</label>
            <div className="col-sm-9">
              <input className="form-control" ref="experience" placeholder="Let us know what experience you have babysitting!" type="textarea" defaultValue={ this.props.currentUser.experience } />
            </div>
        </div>



        <div className="col-sm-2"></div>
        <input className="btn btn-default animated pulse" type="submit" value="Update" />
      </form>
    </div>
    );
  } else {
    return (

    <div className="containerform">
          <div className="col-xs-2"></div>
          <form role="form" className="col-xs-6 form-horizontal" onSubmit={ this._firstSubmit.bind(this) }>

          <div className="form-group">
          <label className="col-sm-4 col-xs-12 control-label">Are you a sitter or parent?</label>
          <select className="col-sm-4 col-xs-12 form-control" ref="sitter">
            <option disabled selected value> -- select an option -- </option>
            <option className="col-sm-4" ref="sitter" value="sitter"> Sitter</option>
            <option className="col-sm-4" ref="sitter" value="parent"> Parent</option>
          </select>
          </div>


          <div className=" form-group">
          <label className="col-sm-4 col-xs-12 control-label">What is your gender?</label>
          <select className="col-sm-4 col-xs-12 form-control" ref="gender">
            <option disabled selected value> -- select an option -- </option>
            <option ref="gender"  name="gender" value="male"> male </option>
            <option ref="gender"  name="gender" value="female"> female </option>
            <option ref="gender"  name="gender" value="none"> prefer not to answer </option>
         </select>
         </div>
                  <input className="btn btn-default animated pulse" type="submit" value="Update" />

          </form>
          <div className="col-xs-2"></div>
      </div>
      );
    }
  }
}

export default Edit;
