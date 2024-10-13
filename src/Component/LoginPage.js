import React from "react";

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
        if(this.props.isLogin!=false)
        return (
            <div style={{position:'absolute',
                        width:"50%",
                        height:"800px",
                        margin:'auto',
                        display:'flex',
                        backgroundColor:"gray",
                        padding:'30px'
            }}>
                

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
        return (
            <div>
                
            </div>
        )
    }
}