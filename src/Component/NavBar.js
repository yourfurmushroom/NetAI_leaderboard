import React from "react"

export default class NavBar extends React.Component
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
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1">
                            {CheckUser(this.props.userName)}
                        </span>
                        
                    <button type="button" class="btn btn-warning" onClick={()=>this.props.logout()} hidden={this.props.userName === ""? true:false}>登出</button>
                    </div>
                </nav>
            </div>
        )
    }
}  


function CheckUser(name)
{
    if(name === "")
        return "please login to upload data"
    else 
        return "hello "+name; 
}