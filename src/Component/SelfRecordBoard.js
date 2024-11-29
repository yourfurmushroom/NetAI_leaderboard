import React, { useEffect, useState } from "react";
import { ws } from "./webServer";
import LeaderBoardItem from "./LeaderBoardItem";


export default function SelfRecordBoard({ UpdateCompetition, competition, groupName, isCheckSelfBoard, username, CheckSelfBoard }) {
    const [submitSet, setsubmitSet] = useState([])
    const [cp, setCp] = useState(competition)
    useEffect(() => {
        if (cp === 1) {
            ws.send(JSON.stringify({
                flag: "ShowBoard",
                username: username,
                groupName: groupName
            }))
            ws.onmessage = (e) => {
                let items = JSON.parse(e.data)
                setsubmitSet([...items['items']])
                UpdateCompetition(cp)
            }
            return () => {
                ws.onmessage = null;
            };

        }
        else if (cp === 2) {
            ws.send(JSON.stringify({
                flag: "ShowBoardCP2",
                username: username,
                groupName: groupName
            }))
            ws.onmessage = (e) => {
                let items = JSON.parse(e.data)
                setsubmitSet([...items['items']])
                UpdateCompetition(cp)
            }
            return () => {
                ws.onmessage = null;
            };

        }
    }, [username, cp])

    if (isCheckSelfBoard) {
        if(cp===1)
        return (
            <div style={{
                position: 'absolute',
                width: "95%",
                height: "800px",
                margin: 'auto',
                display: 'flex',
                // backgroundColor:"rgba(0,10,4,0.5)",
                borderRadius: "20px",
                boxShadow: '0 20px 20px rgba(0,10,4,0.5)',
                padding: '30px',
                left: "50%",
                transform: 'translateX(-50%)'
            }}>


                <div style={{
                    width: "100%",
                    textAlign: "center",
                    boxShadow: "0 0 50px 20px rgba(189,178,187,0.5)",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "20px",
                    overflowY: 'scroll'
                }}>
                    <div style={{
                        width: '80%',
                        margin: 'auto'
                    }} class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                        <label onClick={() => setCp(1)} class="btn btn-outline-primary" for="btnradio1">CP1</label>
    
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label onClick={() => setCp(2)} class="btn btn-outline-primary" for="btnradio2">CP2</label>
                    </div>

                    {ComponantFactor(submitSet)}
                    <button style={{ padding: "50px" }} type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={CheckSelfBoard}></button>
                </div>
            </div>
        )

        else if(cp===2)
            return (
                <div style={{
                    position: 'absolute',
                    width: "95%",
                    height: "800px",
                    margin: 'auto',
                    display: 'flex',
                    // backgroundColor:"rgba(0,10,4,0.5)",
                    borderRadius: "20px",
                    boxShadow: '0 20px 20px rgba(0,10,4,0.5)',
                    padding: '30px',
                    left: "50%",
                    transform: 'translateX(-50%)'
                }}>
    
    
                    <div style={{
                        width: "100%",
                        textAlign: "center",
                        boxShadow: "0 0 50px 20px rgba(189,178,187,0.5)",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "20px",
                        overflowY: 'scroll'
                    }}>
                        <div style={{
                            width: '80%',
                            margin: 'auto'
                        }} class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"  />
                            <label onClick={() => setCp(1)} class="btn btn-outline-primary" for="btnradio1">CP1</label>
        
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked/>
                            <label onClick={() => setCp(2)} class="btn btn-outline-primary" for="btnradio2">CP2</label>
                        </div>
    
                        {ComponantFactor(submitSet)}
                        <button style={{ padding: "50px" }} type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={CheckSelfBoard}></button>
                    </div>
                </div>
            )
    }
}

function ComponantFactor(set) {

    set.sort((a, b) => new Date(b.time) - new Date(a.time))
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
    return set.map(x => <LeaderBoardItem score={x.publicAUC} groupName={x.groupName} timestamp={x.time} description={""}></LeaderBoardItem>)
}