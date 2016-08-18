import React from 'react';
import User from './user';
import InputRange from 'react-input-range';



class UsersContainer extends React.Component {

    constructor(){
      super();
      this.state = {
        values: {
          min: 12,
          max: 90,
        },
        filteredUsers: [

          // {
          //   "nickname": "test",
          //   "firstname": "mike",
          //   "age": 24
          // },
          // {
          //   "nickname": "test2",
          //   "firstname": "mike2",
          //   "age": 50
          // }
          ]
      };
    }


  componentWillMount(){
    $.ajax({
      url: '/users',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      this.setState({filteredUsers: data});
      console.log(data)
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

  handleValuesChange(component, values) {
    this.setState({
      values: values,
    });

    let filteredUsers = this.state.filteredUsers.filter((val) => {
      return val.age > this.state.values.min && val.age < this.state.values.max
    });

    this.setState({
      filteredUsers: filteredUsers
    });

  }




  render(){
      return (
        <div>
        <h2> AGE</h2>
        <form className="form">
          <div className="formField">
            <InputRange
              maxValue={99}
              minValue={12}
              value={this.state.values}
              onChange={this.handleValuesChange.bind(this)}
            />
          </div>
        </form>
          {
          this.state.filteredUsers.map((userObject, index) =>

              <User object={userObject} key={index} />

          )
          }
        </div>
      )
  }
}

export default UsersContainer;
