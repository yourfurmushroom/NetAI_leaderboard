import React from "react";
import InputField from "./InputField";



export class LoginPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            userName:"",
            passWord:"",
            
        }
    }

    TypingUsernameHandler(e)
    {
        this.setState({
            userName:e.target.value
        })
    }
    TypingPasswordHandler(e)
    {
        this.setState({
            passWord:e.target.value
        })
    }

    render()
    {
        if(this.props.isLoginPage)
        return (
            <div style={{position:'absolute',
                        width:"50%",
                        height:"400px",
                        margin:'auto',
                        display:'flex',
                        // backgroundColor:"rgba(0,10,4,0.5)",
                        padding:'30px',
                        left:'50%',
                        transform:'translate(-50%,50%)'
            }}>
            <div style={{
                width:"100%",
                textAlign:"center",
                boxShadow:"0 0 50px 20px rgba(189,178,187,0.5)",
                backgroundColor:"white",
                borderRadius:"10px",
                padding:"20px"
                }}>
                <h1>登入</h1>
                <button style={{padding:"50px"}} type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={()=>this.props.reset()}></button>
                <InputField type="username" name="帳號" text={this.state.userName} handler={(e)=>this.TypingUsernameHandler(e)}></InputField>
                <InputField type="password" name="密碼" text={this.state.passWord} handler={(e)=>this.TypingPasswordHandler(e)}></InputField>
                <button onClick={() => this.props.SubmitHandler(this.state.userName,this.state.passWord)} type="button" class="btn btn-secondary">登入</button>
            </div>
            </div>
        )
    }
}

export class RegisterPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            userName:"",
            passWord:"",
            secondpassword:""
            
        }
    }

    TypingUsernameHandler(e)
    {
        this.setState({
            userName:e.target.value
        })
    }
    TypingPasswordHandler(e)
    {
        this.setState({
            passWord:e.target.value
        })
    }

    TypingSecondPasswordHandler(e)
    {
        this.setState({
            secondpassword:e.target.value
        })
    }


    render()
    {
        if(this.props.isRegisterPage)
            return (
                <div style={{position:'absolute',
                            width:"50%",
                            height:"400px",
                            margin:'auto',
                            display:'flex',
                            // backgroundColor:"rgba(0,10,4,0.5)",
                            padding:'30px',
                            left:'50%',
                            transform:'translate(-50%,50%)'
                }}>
                <div style={{
                    width:"100%",
                    textAlign:"center",
                    boxShadow:"0 0 50px 20px rgba(189,178,187,0.5)",
                    backgroundColor:"white",
                    borderRadius:"10px",
                    padding:"20px"
                    }}>
                    <h1 style={{display:"inline-block"}}>註冊新帳號</h1>
                    <button style={{padding:"50px"}} type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={()=>this.props.reset()}></button>
                    <InputField type="username" name="帳號" handler={(e)=>this.TypingUsernameHandler(e)}></InputField>
                    <InputField type="password" name="密碼" handler={(e)=>this.TypingPasswordHandler(e)}></InputField>
                    <InputField type="password" name="確認密碼" handler={(e)=>this.TypingSecondPasswordHandler(e)}></InputField>
                    <button onClick={() => this.props.SubmitHandler(this.state.userName,this.state.passWord,this.state.secondpassword)} type="button" class="btn btn-secondary">註冊</button>
                </div>
                </div>
            )
    }
}