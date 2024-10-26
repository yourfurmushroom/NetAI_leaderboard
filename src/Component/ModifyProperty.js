import React, { useEffect, useState } from "react";
import { ws } from "./webServer";

export default function ModifyProperty({ userName, modifyProperty, isModifyProperty }) {

    const [Password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [groupName,setGroupName]=useState(userName)

    if (isModifyProperty)
        return (

            <div style={{
                position: 'absolute',
                width: "50%",
                height: "400px",
                margin: 'auto',
                display: 'flex',
                // backgroundColor:"rgba(0,10,4,0.5)",
                borderRadius: "20px",
                boxShadow: '0 20px 20px rgba(0,10,4,0.5)',
                padding: '30px',
                left: "50%",
                transform: 'translate(-50%,25%)'
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
                    <h1 style={{ display: "inline-block" }}>修改隊伍資料</h1>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">隊名</span>
                        <input value={userName} type="text" class="form-control" placeholder={userName} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">新密碼</span>
                        <input onChange={e=>setPassword(e.target.value)} type="password" class="form-control" placeholder="密碼" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">確認新密碼</span>
                        <input onChange={e=>setConfirmPassword(e.target.value)} type="password" class="form-control" placeholder="確認密碼" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <button onClick={()=>SendToWs(userName,groupName,Password,confirmPassword)} type="button" class="btn btn-secondary">修改</button>


                    <button style={{ padding: "50px" }} type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={modifyProperty}></button>
                </div>
            </div>
        )
}   

function SendToWs(username,groupName,password,secondpassword)
{
    ws.send(JSON.stringify({
        flag:'Modify',
        userName:username,
        groupName:groupName,
        password:password,
        secondpassword:secondpassword
    }))
    ws.onmessage=(e)=>{
        let verify=JSON.parse(e.data)
      
      if(verify['messageField'] === "True")
      {
        alert("修改成功,重新登入")
        window.location.reload()
      }
      else{
        alert(verify['detail'])
      }
      
    }

}