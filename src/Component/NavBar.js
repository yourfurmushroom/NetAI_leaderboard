import React from "react"

export default class NavBar extends React.Component
{
    constructor(Props)
    {
        super(Props)
        this.state={
            userName:Props.userName
        }
    }

    render()
    {
        return (
            <div>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1">
                            {CheckUser(this.state.userName)}
                            </span>
                    </div>
                </nav>
            </div>
        )
    }
}  


function CheckUser(name)
{
    if(name === null)
        return "please login to upload data"
    else 
        return "hello "+name; 
}