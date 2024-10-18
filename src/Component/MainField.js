import React, { useState } from "react";
import NavBar from "./NavBar";
import WorkPlace from "./WorkPlace";

export default class MainField extends React.Component {
    constructor(Props) {
        super(Props)
        this.state = {
            isLogin: false,
            userName: "",
        }
    }

    LoginHandler(name) {
        this.setState({
            isLogin: true,
            userName: name,
        })
    }
    Logout()
    {
        this.setState({
            isLogin: false,
            userName: "",
        })
    }

    render() {
        if (this.state.isLogin) {

            return (
                <div>
                    <NavBar userName={this.state.userName} logout={()=>{this.Logout()}}></NavBar>
                    <WorkPlace userName={this.state.userName} isLogin={this.state.isLogin} setLogin={(e)=>this.LoginHandler(e)}></WorkPlace>
                </div>
            )

        }
        else {
            return (
                <div>
                    <NavBar userName={this.state.userName} logout={()=>{this.Logout()}}></NavBar>
                    <WorkPlace isLogin={this.state.isLogin} setLogin={(e)=>this.LoginHandler(e)}></WorkPlace>
                </div>
            )
        }
    }
}
