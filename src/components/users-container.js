import React from 'react';
import User from './user';
import InputRange from 'react-input-range';


class UsersContainer extends React.Component {
    constructor(){
    super();
    this.state = {
      values: {
        min: 12,
        max: 99,
      },
    };
  }

  handleValuesChange(component, values) {
    this.setState({
      values: values,
    });
  }


  render(){
      return (
        <div>
        <InputRange
        maxValue={77}
        minValue={11}
        value={this.state.values}
        onChange={this.handleValuesChange.bind(this)} />
          { this.props.users.map((userObject, index) => <User object={userObject} key={index} />) }
        </div>
      )
  }
}

export default UsersContainer;
