import React from "react";
import InputField from "./InputField";


export class LoginPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }



    render()
    {
        if(this.props.isLogin!==false)
        return (
            <div style={{position:'absolute',
                        width:"50%",
                        height:"400px",
                        margin:'auto',
                        display:'flex',
                        // backgroundColor:"rgba(0,10,4,0.5)",
                        padding:'30px',
            }}>
            <div style={{
                width:"100%",
                textAlign:"center",
                boxShadow:"0 0 50px 20px black",
                borderRadius:"10px",
                padding:"20px"
                }}>
                <h1>asdasd</h1>
                <InputField type="username"></InputField>
                <InputField type="password"></InputField>
                <button onClick={() => this.props.SubmitHandler()} type="button" class="btn btn-secondary">登入</button>
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

        }
    }

    render()
    {
        if(this.props.isRegister!==false)
            return (
                <div style={{position:'absolute',
                            width:"50%",
                            height:"400px",
                            margin:'auto',
                            display:'flex',
                            // backgroundColor:"rgba(0,10,4,0.5)",
                            padding:'30px',
                }}>
                <div style={{
                    width:"100%",
                    textAlign:"center",
                    boxShadow:"0 0 50px 20px black",
                    borderRadius:"10px",
                    padding:"20px"
                    }}>
                    <h1>asdasd</h1>
                    <InputField type="username" name="username"></InputField>
                    <InputField type="password" name="password"></InputField>
                    <InputField type="password" name="comfirm password"></InputField>
                    <button onClick={() => this.props.SubmitHandler()} type="button" class="btn btn-secondary">註冊</button>
                </div>
                </div>
            )
    }
}