import NavBar from "./NavBar"

export var ws = new WebSocket("ws://140.116.246.240:8888/socket")

ws.onopen  = function(e)
{
    console.log("aaa")
    ws.send(JSON.stringify("request"))
}
// ws.onmessage=(e)=>
// {
   
// }
ws.onclose=(e)=>
{
    console.log("closed")
    NavBar.wsDisconnect()
    ws.close(1000,"success")
}

