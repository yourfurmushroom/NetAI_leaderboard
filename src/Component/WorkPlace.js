import React from "react"
import RequestLogin from "./RequestLoginOrRegister"
import LeaderBoardArea from "./LeaderBoardArea"
import SelectFileField from "./SelectFileField"

export default class WorkPlace extends React.Component
{
    constructor(Props)
    {
        super(Props)
        this.state={

        }
    }

    render()
    {
        if(this.props.isLogin)
        {
            return (
                <div class="workField" style={{display:"flex"}}>
                    <SelectFileField userName={this.props.userName} setLogin={(e)=>this.props.setLogin(e)}></SelectFileField>
                    <LeaderBoardArea></LeaderBoardArea>
    
                </div>
            )
        }
        else
        return (
            <div class="workField" style={{display:"flex"}}>
                <RequestLogin setLogin={(e)=>this.props.setLogin(e)}></RequestLogin>
                <LeaderBoardArea></LeaderBoardArea>

            </div>
        )
    }


}