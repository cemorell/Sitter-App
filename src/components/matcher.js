import React from 'react';

class Matcher extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            matchedUser:{},
            currentUser: {}
        }
    }

    _getOtherUserId( request, user ) {
        return request.sender_id != user._id ? request.sender_id : request.recipient_id;
    }

    componentWillMount(){
        //with that request object, go get the sending user
        $.ajax({
                url: '/profile',
                method: "GET",
                dataType: "json"
            })
            .done(function(data){
                this.setState({currentUser: data});
                var other_user_id = this._getOtherUserId( this.props.object, data );
                this.fetchOtherUser( other_user_id );
            }.bind(this))
            .fail(function(error){
                console.log(error);
            })
    }



    fetchOtherUser( other_user_id )
    {

        $.ajax({
                method: "GET",
                url: "/users/" + other_user_id,
                dataType: 'json'
            })
            .done(function(data){
                console.log(data);
                this.setState({matchedUser: data[0]});
            }.bind(this))
            .fail(function(error){
                console.log(error);
            })

    }




    render(){
        return (
            <div className="matcher">
                <img src={ this.state.matchedUser.image_url }  />
                <h2> { this.state.matchedUser.nickname } </h2>
                <h2> { this.state.matchedUser.firstname } </h2> <h2> { this.state.matchedUser.lastname } </h2>
                <h3> { this.state.matchedUser.email } </h3>
            </div>
        );
    }
}

export default Matcher;
