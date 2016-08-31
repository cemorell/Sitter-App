import React from 'react';

class Requester extends React.Component {

    constructor(props){
      super(props);
      this.state= {
        matched:{},
      }
    }

    componentWillMount(){
      //with that request object, go get the sending user
      $.ajax({
        method: "GET",
        url: "/users/" + this.props.object.sender_id,
        dataType: 'json'
      })
      .done(function(data){
        console.log(data)
        this.setState({matched: data[0]});
      }.bind(this))
      .fail(function(error){
        console.log(error);
      })
    }

  render(){
      return (
        <div className="matcher">
          <h1>{ this.props.currentUser}
          <h2> { this.state.matched._id } </h2>
        </div>
        );
      }
}

export default Requester;
