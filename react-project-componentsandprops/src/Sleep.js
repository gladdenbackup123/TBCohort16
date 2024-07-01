import React from "react";


class Sleep extends React.Component{
    render(){
        return <h1> {this.props.name} is sleeping zzzzzzzz! He is from {this.props.city} </h1>
    }
}

export default Sleep;