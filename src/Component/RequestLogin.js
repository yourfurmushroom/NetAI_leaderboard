import React from "react"
import { LoginPage, RegisterPage } from "./LoginPage"

export default class RequestLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      isRegister: false,
    }
  }

  LoginHandler() {
    this.setState({ isLogin: true, isRegister: false })

  }

  RegisterHandler() {
    this.setState({ isLogin: false, isRegister: true })
  }

  render() {
    return (
      <div style={{display:'absolute',
                  width:"100%",
                  textAlign:'center',
                  transform:'translateX(20%)'
                  }}>
        <LoginPage isLogin={this.state.isLogin}></LoginPage>
        <RegisterPage isRegister={this.state.isRegister}></RegisterPage>
      <div style={{
        justifyContent: 'space-between',
        width: '70%',
        textAlign: 'center',
        alignContent: 'center'
        
      }}>
          <button onClick={() => this.LoginHandler()}>登入</button>
          <button onClick={() => this.RegisterHandler()}>註冊</button>
        </div>
          </div>
    )
  }
}

