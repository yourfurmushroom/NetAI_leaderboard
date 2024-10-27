import NavBar from "./NavBar"

export var ws

// ws.onopen  = function(e)
// {
//     console.log("aaa")
//     ws.send(JSON.stringify("request"))
// }

// ws.onmessage=(e)=>
// {
//   alert("檔案結構有誤 請重試")
//   document.location.reload  
// }
// ws.onclose=(e)=>
// {
//     console.log("closed")
//     NavBar.wsDisconnect()
//     ws.close(1000,"success")
// }


export const initializeWebSocket = () => {
  if (!ws || ws.readyState === WebSocket.CLOSED) {
    ws = new WebSocket("ws://140.116.246.240:8888/socket");

    ws.onopen = function (e) {
      console.log("WebSocket connected");
      ws.send(JSON.stringify("request"));
    };

    ws.onclose = function (e) {
      console.log("WebSocket closed");
      NavBar.wsDisconnect();
      ws.close(1000, "success");
    };
  }
};