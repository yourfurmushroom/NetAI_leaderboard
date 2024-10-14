import React from "react"
import { LoginPage, RegisterPage } from "./LoginPage"

export default class RequestLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      isRegister: false,
    }
  }

  LoginHandler() {
    this.setState({ isLogin: true, isRegister: false })

  }

  RegisterHandler() {
    this.setState({ isLogin: false, isRegister: true })
  }

  SubmitHandler()
  {
    this.setState({ isLogin: false, isRegister: false })
  }

  render() {
    if (!this.state.isLogin && !this.state.isRegister)
    return (
      <div style={{
        justifyContent: 'space-between',
        width: '70%',
        textAlign: 'center',
        alignContent: 'center'
      }}>
        <div className="buttonPlace">
          <button onClick={() => this.LoginHandler()} type="button" class="btn btn-secondary">登入</button>
      </div>
      <div className="buttonPlace">
          <button onClick={() => this.RegisterHandler()} type="button" class="btn btn-secondary">註冊</button>
      </div>
          
        </div>   
    )
    else
    return(
    <div style={{
                width:"100%",
                textAlign:"center",
                transform:"translateX(30%)"
              }}>
      <LoginPage isLogin={this.state.isLogin} SubmitHandler={()=>this.SubmitHandler()}></LoginPage>
      <RegisterPage isRegister={this.state.isRegister} SubmitHandler={()=>this.SubmitHandler()}></RegisterPage>

    </div>
  )
  }
}

