import React from "react";
import LeaderBoardItem from './LeaderBoardItem'

export default class LeaderBoardArea extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render()
    {
        return(
            <div style={{
                    backgroundColor:'rgba(224,215,206,0.3)',
                    overflow:'scrollY',
                    height:'90vh',
                    width:'100%',
                    margin:'auto',
                    overflowY:'scroll'

            }}>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                <LeaderBoardItem></LeaderBoardItem>
                
            </div>
        )
    }

}
