import React from "react";
import NavBar from "./NavBar";
import WorkPlace from "./WorkPlace";
import Cookies from 'js-cookie';

export default class MainField extends React.Component {
    constructor(Props) {
        super(Props)
        this.state = {
            isLogin: Cookies.get('isLogin') ||false,
            userName: Cookies.get('userName') || "",
            isCheckSelfBoard:false,
            isModifyProperty:false,
            groupname:Cookies.get('groupName') ||"",
        }
    }

    LoginHandler(name,groupName) {
        Cookies.set('userName', name, { expires: 7 }); // Cookie 有效期 7 天
        Cookies.set('groupName', groupName, { expires: 7 });
        Cookies.set('isLogin',true,{expires:7})
        this.setState({
            isLogin: true,
            userName: name,
            groupName:groupName
        })
    }
    Logout()
    {
        Cookies.remove('userName');
        Cookies.remove('groupName');
        Cookies.remove('isLogin')
        this.setState({
            isLogin: false,
            userName: "",
            groupName:""
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
                    <NavBar groupName={this.state.groupname} modifyProperty={()=>this.ChangeUserPropertiesWindow()} isModifyProperty={this.state.isModifyProperty} CheckSelfBoard={()=>this.CheckSelfBoard()} isCheckSelfBoard={this.state.isCheckSelfBoard} isLogin={this.state.isLogin} setLogin={(e,v)=>this.LoginHandler(e,v)} userName={this.state.userName} logout={()=>{this.Logout()}}></NavBar>
                    <WorkPlace groupName={this.state.groupname} userName={this.state.userName} modifyProperty={()=>this.ChangeUserPropertiesWindow()} isModifyProperty={this.state.isModifyProperty} CheckSelfBoard={()=>this.CheckSelfBoard()} isCheckSelfBoard={this.state.isCheckSelfBoard} isuserName={this.state.userName} isLogin={this.state.isLogin} setLogin={(e)=>this.LoginHandler(e)}></WorkPlace>
                </div>
            )
        }
        else {
            return (
                <div>
                    <NavBar groupName={this.state.groupname} CheckSelfBoard={()=>this.CheckSelfBoard()} isLogin={this.state.isLogin} setLogin={(e,v)=>this.LoginHandler(e,v)} userName={this.state.userName} logout={()=>{this.Logout()}}></NavBar>
                    <WorkPlace groupName={this.state.groupname} userName={this.state.userName} CheckSelfBoard={()=>this.CheckSelfBoard()} isCheckSelfBoard={this.state.isCheckSelfBoard} isLogin={this.state.isLogin} setLogin={(e)=>this.LoginHandler(e)}></WorkPlace>
                </div>
            )
        }
    }
}
