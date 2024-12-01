import React from "react";
import NavBar from "./NavBar";
import WorkPlace from "./WorkPlace";
import Cookies from 'js-cookie';

export default class MainField extends React.Component {
    constructor(Props) {
        super(Props)
        this.state = {
            isLogin: Cookies.get('isLogin') === 'true' ||false,
            userName: Cookies.get('userName') || "",
            isCheckSelfBoard:false,
            isModifyProperty:false,
            groupName:Cookies.get('groupName') ||"",
        }
    }

    LoginHandler(name,groupName) {
        Cookies.set('userName', name, { expires: 7,path: '/' }); // Cookie 有效期 7 天
        Cookies.set('groupName', groupName, { expires: 7,path: '/' });
        Cookies.set('isLogin',true,{expires:7,path: '/'})
        this.setState({
            isLogin: true,
            userName: name,
            groupName:groupName
        })
    }
    Logout()
    {
        Cookies.remove('userName',{ path: '/' });
        Cookies.remove('groupName',{ path: '/' });
        Cookies.remove('isLogin',{ path: '/' })

        this.setState({
            isLogin: false,
            userName: "",
            groupName:"",
        },() => {
            // 強制刷新頁面
            window.location.reload();
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
