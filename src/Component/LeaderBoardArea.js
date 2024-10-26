import React, { useEffect, useState } from "react";
import LeaderBoardItem from './LeaderBoardItem'
import { ws } from "./webServer";

export default function LeaderBoardArea ()
{
    const [items,setitem]=useState([])
    const [isWsReady, setIsWsReady] = useState(false);
    useEffect(() => {
        // Check if WebSocket is ready
        if (ws.readyState === WebSocket.OPEN) {
        //   setIsWsReady(true);
        } else {
          ws.onopen = () => {
            setIsWsReady(true);
          };
        }
    
        return () => {
          ws.onopen = null;
        };
      }, [ws])

    useEffect(()=>{
        console.log("asd")
        if(ws.readyState===WebSocket.OPEN)
        {
            ws.send(JSON.stringify({
                flag: "ShowOverallBoard",
            }))
            ws.onmessage=(e)=>{
                let items = JSON.parse(e.data)
                setitem(prev => [...prev, ...items['items']])
            }
        }
        return () => {
            ws.onmessage = null;
        };
    },[isWsReady])

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
    set.sort((a, b) => b.publicAUC - a.publicAUC)
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