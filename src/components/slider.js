import React from 'react';
import Slider from 'react-rangeslider';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10 /** Start value **/
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <Slider
        value={value}
        orientation="horizonal"
        onChange={this.handleChange} />
    );
  }
}
});

module.exports = Slider;
ReactDOM.render(<Slider />, document.getElementById('container'));

