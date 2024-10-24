import React, { useEffect, useState } from "react";
import LeaderBoardItem from './LeaderBoardItem'
import { ws } from "./webServer";

export default function LeaderBoardArea ()
{
    const [items,setitem]=useState([])
    useEffect(()=>{
        ws.send(JSON.stringify({
            flag: "ShowOverallBoard",
        }))
        ws.onmessage=(e)=>{
            console.log(e)
            let items = JSON.parse(e.data)
            setitem(prev => [...prev, ...items['items']])
            console.log(items)
        }
        return () => {
            ws.onmessage = null;
        };
    },[])

    return(
        <div style={{
                backgroundColor:'rgba(224,215,206,0.3)',
                overflow:'scrollY',
                height:'90vh',
                width:'100%',
                margin:'auto',
                overflowY:'scroll'

        }}>
            
            {ComponantFactor(items)}
            
        </div>
    )


}
function ComponantFactor(set)
{
    return set.map(x=><LeaderBoardItem description={x} >x</LeaderBoardItem>)
}