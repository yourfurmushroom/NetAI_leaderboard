import React, { useState } from "react";
import {ws} from './webServer'

export default function UploadButton({ userName }) {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [reactChildren,setChild]=useState([])

    ws.onmessage=(e)=>
    {
        let msg=JSON.parse(e.data)
        alert(msg['detail'])
        setChild((prevChildren) => [...prevChildren, <li>{msg['filename']+" "+msg['detail']}</li>])
    }


    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleUpload = () => {
        if (ws && selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                const reader = new FileReader();
                const filename=file.name.split('.')

                reader.onload = function (e) {
                    const fileBuffer = e.target.result;
                    ws.send(JSON.stringify({
                        flag:"Upload",
                        filename:`${userName}.${filename.pop()}`,
                        filebuffer:btoa(new Uint8Array(fileBuffer).reduce((data,byte)=>data+String.fromCharCode(byte),''))
                    }));  // 發送文件的二進制數據
                };
                
                reader.readAsArrayBuffer(file);  // 讀取文件為 ArrayBuffer
            }
        }
        else
        {
            alert("沒有選擇檔案")
        }
    };


    return (
        <div>
            <div className="mb-3">
                <h1 for="formFileMultiple" className="form-label">選擇壓縮檔</h1>
                <input className="form-control" type="file" id="formFileMultiple" multiple onChange={(e)=>handleFileChange(e)} />
                <button onClick={()=>handleUpload()}>上傳</button>
            </div>
            <div>
            <h2 for="formFileMultiple" className="form-label">已選擇資料</h2>
            <ul style={{listStyle:"none"}}>
                
                {reactChildren}
            </ul>
            </div>
        </div>
    )
}