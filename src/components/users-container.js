import React from 'react';
import User from './user';
import InputRange from 'react-input-range';


class UsersContainer extends React.Component {

    constructor(){
      super();
      this.state = {
        values: {
          min: 12,
          max: 92,
        },
        allUsers: [ ],
        filteredUsers: [ ],
        genderedUsers: [ ],
        myUsers: [ ]
      };
    }

   componentWillMount(){
    $.ajax({
      url: '/users',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      this.setState({filteredUsers: data, allUsers: data, genderedUsers: data, myUsers:data });
      // console.log(data)
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
  }

  componentWillReceiveProps(){
    $.ajax({
      url: '/users',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      this.setState({filteredUsers: data, allUsers: data, genderedUsers: data, myUsers:data });
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
    $.ajax({
      url: '/profile',
      method: "GET",
      dataType: "json"
    })
  }

  saySomething() {
    let filteredUsers = this.state.filteredUsers
    let genderedUsers = this.state.genderedUsers
    let array = []

        for (var i = filteredUsers.length - 1; i >= 0; i--) {
          for (var j = genderedUsers.length - 1; j >= 0; j--) {
            if (filteredUsers[i]._id === genderedUsers[j]._id) {
              array.push(filteredUsers[i])
            }
          }
        }

      this.setState({
      myUsers: array
    });
  }


  handleValuesChange(component, values) {
    this.setState({
      values: values,
    });

    let filteredUsers = this.state.allUsers.filter((val) => {
      return val.age > this.state.values.min && val.age < this.state.values.max
    });

    this.setState({
      filteredUsers: filteredUsers
    });
    if(this.state.values.max-this.state.values.min > 85){
      this.setState({
      filteredUsers: this.props.users
    });
    }
    this.saySomething()
  }

  _handleClickAll(){
    console.log("all")
    this.setState({
      genderedUsers: this.state.allUsers
    }).then(this.saySomething());
  }

  _handleClickMale(){
    console.log("male")
    let genderedUsers = this.state.allUsers.filter((users) => {
      return users.gender === "male"
    })
    this.setState({
      genderedUsers: genderedUsers
    });
        this.saySomething()
  }

  _handleClickFemale(){
    console.log("female")
    let genderedUsers = this.state.allUsers.filter((users) => {
      return users.gender === "female"
    })
    this.setState({
      genderedUsers: genderedUsers
    });
        this.saySomething()
  }


  render(){
      return (
        <div className="sittersHere">
          <div className="row">

            <div className="btn-group col-xs-12 col-md-4" role="group" aria-label="...">
                <button type="button" onClick={ this._handleClickAll.bind(this) } ref="gender" value="all" className="btn btn-default">All</button>
                <button type="button" onClick={ this._handleClickMale.bind(this) } ref="gender" value="male" className="btn btn-default">Male</button>
                <button type="button" onClick={ this._handleClickFemale.bind(this) } ref="gender" value="black" className="btn btn-default">Female</button>
            </div>

            <form className="form col-xs-12 col-md-7">
              <div className="formField">
                <InputRange
                  maxValue={99}
                  minValue={12}
                  value={this.state.values}
                  onChange={this.handleValuesChange.bind(this)}
                />
              </div>
            </form>
          </div>

          {
          this.state.myUsers.map((userObject, index) =>

              <User object={userObject} key={index} />

          )
          }
        </div>
      )
  }
}

export default UsersContainer;
