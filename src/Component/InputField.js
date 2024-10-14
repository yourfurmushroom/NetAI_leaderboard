import React from "react";

export default class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            type:this.props.type,
        }
    }

    render() {
        return (
        <div>
            <label for="inputPassword5" class="form-label">{this.props.name}</label>
            <input onChange={(e)=>this.props.handler(e)} value={this.props.text} type={this.state.type=="password" || this.state.type == "confirm password"? "password":"text"} id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
        </div>
        )
    }
}