import React, { useState } from "react";
import NavBar from "./NavBar";
import WorkPlace from "./WorkPlace";

export default class MainField extends React.Component {
    constructor(Props) {
        super(Props)
        this.state = {
            isLogin: false,
            userName: null,
        }
    }

    LoginHandler(name) {
        this.setState({
            isLogin: true,
            userName: name,
        })
    }

    render() {
        if (this.state.isLogin) {

            return (
                <div>
                    <NavBar userName={this.state.userName}></NavBar>
                    <WorkPlace isLogin={this.state.isLogin}></WorkPlace>
                </div>
            )

        }
        else {
            return (
                <div>
                    <NavBar userName={this.state.userName}></NavBar>
                    <WorkPlace isLogin={this.state.isLogin}></WorkPlace>
                </div>
            )
        }
    }
}
