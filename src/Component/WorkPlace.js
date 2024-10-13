import React from "react"
import RequestLogin from "./RequestLogin"
import LeaderBoardArea from "./LeaderBoardArea"

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
                    
                    <LeaderBoardArea></LeaderBoardArea>
    
                </div>
            )
        }
        else
        return (
            <div class="workField" style={{display:"flex"}}>
                <RequestLogin></RequestLogin>
                <LeaderBoardArea></LeaderBoardArea>

            </div>
        )
    }


}