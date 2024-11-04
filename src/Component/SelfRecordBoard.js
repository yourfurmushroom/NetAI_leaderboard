import React, { useEffect, useState } from "react";
import { ws } from "./webServer";
import LeaderBoardItem from "./LeaderBoardItem";


export default function SelfRecordBoard({ groupName,isCheckSelfBoard,username, CheckSelfBoard}) {
    const [submitSet, setsubmitSet] = useState([])
    useEffect(() => {
        ws.send(JSON.stringify({
            flag: "ShowBoard",
            username: username,
            groupName:groupName
        }))
        ws.onmessage = (e) => {
            let items = JSON.parse(e.data)
            setsubmitSet(prev => [...prev, ...items['items']])
        }
        return () => {
            ws.onmessage = null;
        };
    }, [username])

    if(isCheckSelfBoard)
    return (
        
        <div style={{
            position: 'absolute',
            width: "95%",
            height: "800px",
            margin: 'auto',
            display: 'flex',
            // backgroundColor:"rgba(0,10,4,0.5)",
            borderRadius:"20px",
            boxShadow:'0 20px 20px rgba(0,10,4,0.5)',
            padding: '30px',
            left:"50%",
            transform:'translateX(-50%)'
        }}>
             <div style={{
                width:"100%",
                textAlign:"center",
                boxShadow:"0 0 50px 20px rgba(189,178,187,0.5)",
                backgroundColor:"white",
                borderRadius:"10px",
                padding:"20px",
                overflowY:'scroll'
                }}>
                
            {ComponantFactor(submitSet)}
            <button style={{padding:"50px"}} type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={CheckSelfBoard}></button>
            </div>
        </div>
    )
}   

function ComponantFactor(set)
{
    
    set.sort((a, b) => new Date(b.time) - new Date(a.time))
    set.forEach(x => {
        x.time=new Date(x.time).toLocaleString('zh-Hans-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, // 24小时制
        });
    });
    return set.map(x=><LeaderBoardItem score={x.publicAUC} groupName={x.groupName} timestamp={x.time} description={""}></LeaderBoardItem>)
}