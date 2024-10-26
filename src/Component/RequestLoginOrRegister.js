import React from "react"
import { LoginPage, RegisterPage } from "./LoginPage"
import { ws } from "./webServer"


export default class RequestLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoginPage: false,
      isRegisterPage: false,
    }
  }

  ResetWindow()
  {
    this.setState({ isLoginPage: false, isRegisterPage: false })
  }

  LoginHandler() {
    this.setState({ isLoginPage: true, isRegisterPage: false })
  }

  RegisterHandler() {
    this.setState({ isLoginPage: false, isRegisterPage: true })
  }

  CheckIsEmpty(text)
  {
    let regex=new RegExp("^\s*$")
    return regex.test(text);
  }

  SubmitHandler(username, password) {
    if(this.CheckIsEmpty(username)||this.CheckIsEmpty(password))
    {
      alert("逮到你了")
      return true
    }
    this.setState({ isLoginPage: false, isRegisterPage: false })
    ws.send(JSON.stringify({
      flag: "Login",
      username: username,
      password: password,
      secondpassword: ''
    }))

    ws.onmessage = (e) => {
      let verify=JSON.parse(e.data)
      if(verify['messageField'] === "True")
      {
        alert(verify['detail'])
        this.props.setLogin(username,verify['groupName'])
      }
      else{
        alert(verify['detail'])
        return
      }
      
    }
  }

  SubmitHandlerInsert(username, password, secondpassword) {
    if(this.CheckIsEmpty(username)||this.CheckIsEmpty(password)||this.CheckIsEmpty(secondpassword))
      {
        alert("逮到你了")
        return true
      }

    this.setState({ isLoginPage: false, isRegisterPage: false })
    ws.send(JSON.stringify({
      flag: "Register",
      username: username,
      password: password,
      secondpassword: secondpassword
    }))
    ws.onmessage = (e) => {
      let verify=JSON.parse(e.data)
      
      if(verify['messageField'] === "True")
      {
        alert("register Successful,please login")
        return
      }
      else{
        alert(verify['detail'])
      }
      
    }
  }

  render() {
    if (!this.state.isLoginPage && !this.state.isRegisterPage)
      return (
        <div style={{
          justifyContent: 'space-between',
          width: '70%',
          textAlign: "right",
          alignContent: 'center'
        }}>
          <div className="buttonPlace">
            <button onClick={() => this.LoginHandler()} type="button" class="btn btn-secondary">登入</button>
          </div>
          {/* <div className="buttonPlace">
            <button onClick={() => this.RegisterHandler()} type="button" class="btn btn-secondary">註冊</button>
          </div> */}

        </div>
      )
    else
      return (
        <div style={{
          width: "70%",
          textAlign: "center",
          
        }}>
          <LoginPage reset={()=>this.ResetWindow()} isLoginPage={this.state.isLoginPage} SubmitHandler={(username, password) => this.SubmitHandler(username, password)}></LoginPage>
          <RegisterPage reset={()=>this.ResetWindow()} isRegisterPage={this.state.isRegisterPage} SubmitHandler={(username, password, secondpassword) => this.SubmitHandlerInsert(username, password, secondpassword)}></RegisterPage>
        </div>
      )
  }
}

