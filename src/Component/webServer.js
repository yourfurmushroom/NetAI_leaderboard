var ws = new WebSocket("ws://localhost:8888/socket")
const uuid=crypto.randomUUID()

ws.onopen  = function(e)
{
    
}
ws.onmessage=(e)=>
{
    
}
ws.onclose=(e)=>
{
    ws.close(1000,"success")
}

