import React from "react";
import NavBar from "./NavBar";
import WorkPlace from "./WorkPlace";

export default class MainField extends React.Component {
    constructor(Props) {
        super(Props)
        this.state = {
            isLogin: false,
            userName: "",
            isCheckSelfBoard:false,
            isModifyProperty:false,
            groupname:"",
        }
    }

    LoginHandler(name,groupName) {
        this.setState({
            isLogin: true,
            userName: name,
            groupName:groupName
        })
    }
    Logout()
    {
        this.setState({
            isLogin: false,
            userName: "",
        })
    }

    CheckSelfBoard() {
        this.setState({
            isCheckSelfBoard: !this.state.isCheckSelfBoard
        })
    }

    ChangeUserPropertiesWindow()
    {
        this.setState({
            isModifyProperty: !this.state.isModifyProperty
        })
    }

    render() {
        if (this.state.isLogin) {

            return (
                <div>
                    <NavBar groupName={this.state.groupName} modifyProperty={()=>this.ChangeUserPropertiesWindow()} isModifyProperty={this.state.isModifyProperty} CheckSelfBoard={()=>this.CheckSelfBoard()} isCheckSelfBoard={this.state.isCheckSelfBoard} isLogin={this.state.isLogin} setLogin={(e,v)=>this.LoginHandler(e,v)} userName={this.state.userName} logout={()=>{this.Logout()}}></NavBar>
                    <WorkPlace groupName={this.state.groupName} userName={this.state.userName} modifyProperty={()=>this.ChangeUserPropertiesWindow()} isModifyProperty={this.state.isModifyProperty} CheckSelfBoard={()=>this.CheckSelfBoard()} isCheckSelfBoard={this.state.isCheckSelfBoard} isuserName={this.state.userName} isLogin={this.state.isLogin} setLogin={(e)=>this.LoginHandler(e)}></WorkPlace>
                </div>
            )
        }
        else {
            return (
                <div>
                    <NavBar groupName={this.state.groupName} CheckSelfBoard={()=>this.CheckSelfBoard()} isLogin={this.state.isLogin} setLogin={(e,v)=>this.LoginHandler(e,v)} userName={this.state.userName} logout={()=>{this.Logout()}}></NavBar>
                    <WorkPlace groupName={this.state.groupName} userName={this.state.userName} CheckSelfBoard={()=>this.CheckSelfBoard()} isCheckSelfBoard={this.state.isCheckSelfBoard} isLogin={this.state.isLogin} setLogin={(e)=>this.LoginHandler(e)}></WorkPlace>
                </div>
            )
        }
    }
}
