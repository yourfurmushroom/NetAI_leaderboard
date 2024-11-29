import React, { useEffect, useState } from "react";
import LeaderBoardItem from './LeaderBoardItem'
import { ws } from "./webServer";

export default function LeaderBoardArea({UpdateCompetition,competiton}) {
    const [items, setitem] = useState([])
    const [isWsReady, setIsWsReady] = useState(false);
    const [cp, setCp] = useState(competiton)

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

    useEffect(() => {
        if (ws.readyState === WebSocket.OPEN) {
            if (cp === 1) {
                ws.send(JSON.stringify({
                    flag: "ShowOverallBoard",
                }))
                ws.onmessage = (e) => {
                    let items = JSON.parse(e.data)
                    setitem([...items['items']])
                }
                UpdateCompetition(cp)
            }
            else if (cp === 2) {
                ws.send(JSON.stringify({
                    flag: "ShowOverallBoardCP2",
                }))
                ws.onmessage=(e)=>{
                    let items = JSON.parse(e.data)
                    setitem([...items['items']])
                }
                UpdateCompetition(cp)
            }
        }
        return () => {
            ws.onmessage = null;
        };
    }, [isWsReady,cp])

    if(cp===1)
    return (
        <div style={{
            backgroundColor: 'rgba(224,215,206,0.3)',
            height: '90vh',
            width: '100%',
            margin: 'auto'
            }}>
            <div style={{width:'100%',
            margin:'auto'
            }} class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label onClick={()=>setCp(1)} class="btn btn-outline-primary" for="btnradio1">CP1</label>

                <input  type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label onClick={()=>setCp(2)} class="btn btn-outline-primary" for="btnradio2">CP2</label>
            </div>
            <div style={{
                backgroundColor: 'rgba(224,215,206,0.3)',
                overflow: 'scrollY',
                height: '90vh',
                width: '100%',
                margin: 'auto',
                overflowY: 'scroll'

            }}>
                {ComponantFactor(items)}
            </div>
        </div>
    )

    if(cp===2)
        return (
            <div style={{
                backgroundColor: 'rgba(224,215,206,0.3)',
                height: '90vh',
                width: '100%',
                margin: 'auto'
                }}>
                <div style={{width:'100%',
            margin:'auto'
            }} class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"  />
                    <label onClick={()=>setCp(1)} class="btn btn-outline-primary" for="btnradio1">CP1</label>
    
                    <input  type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked/>
                    <label onClick={()=>setCp(2)} class="btn btn-outline-primary" for="btnradio2">CP2</label>
                </div>
                <div style={{
                    backgroundColor: 'rgba(224,215,206,0.3)',
                    overflow: 'scrollY',
                    height: '90vh',
                    width: '100%',
                    margin: 'auto',
                    overflowY: 'scroll'
    
                }}>
                    {ComponantFactor(items)}
                </div>
            </div>
        )


}
function ComponantFactor(set) {
    set.sort((a, b) => b.publicAUC - a.publicAUC)
    set.forEach(x => {
        x.time = new Date(x.time).toLocaleString('zh-Hans-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, // 24小时制
        });
    });
    return set.map((x, index) => <LeaderBoardItem key={index} id={index} score={x.publicAUC} groupName={x.groupName} timestamp={x.time} description={""}></LeaderBoardItem>)
}