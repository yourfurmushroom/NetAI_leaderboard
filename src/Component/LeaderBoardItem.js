import pic1 from "../pic/1.png"
import pic2 from "../pic/2.png"
import pic3 from "../pic/3.png"

export default function LeaderBoardItem({key,id,score,groupName,timestamp,description})
{
    if(id===0)
    {
        return (
            <div style={{
                width:'80%',
                height:"100px",
                backgroundColor:"white",
                margin:"20px auto",
                textAlign:"center",
                border:"2px solid rgba(200,191,231,0.5)",
                borderRadius:"20px",
                display:'flex',
                alignContent: 'center',
                boxShadow:'0px 0px 10px rgba(189,235,5,1)'
            }}>
                    <img style={{display:'inline',position:'relative',height:'85px',width:'80px',borderRadius:"20px",margin:"5px 5px" }} src={pic1}></img>
                    <div className="labelItem">
                        {groupName}
                    </div>
                    <div className="labelItem">
                        {timestamp}
                    </div>
                    <div className="labelItem">
                        {/* {score}{description} */score}
                    </div>
                
            </div>
        )
    }
    else if(id===1)
    {
        return (
            <div style={{
                width:'80%',
                height:"100px",
                backgroundColor:"white",
                margin:"20px auto",
                textAlign:"center",
                border:"2px solid rgba(200,191,231,0.8)",
                borderRadius:"20px",
                display:'flex',
                alignContent: 'center',
                boxShadow:'0px 0px 40px rgba(33,153,201,0.5)'
                }}>
                    <img style={{display:'inline',position:'relative',height:'85px',width:'80px',borderRadius:"20px",margin:"5px 5px" }} src={pic2}></img>
                    <div className="labelItem">
                        {groupName}
                    </div>
                    <div className="labelItem">
                        {timestamp}
                    </div>
                    <div className="labelItem">
                        {/* {score}{description} */score}
                    </div>
                
            </div>
        )
    }
    else if(id===2)
    {
        return (
            <div style={{
                width:'80%',
                height:"100px",
                backgroundColor:"white",
                margin:"20px auto",
                textAlign:"center",
                border:"2px solid rgba(200,191,231,0.5)",
                borderRadius:"20px",
                display:'flex',
                alignContent: 'center',
                boxShadow:'0px 0px 40px rgba(201,162,86,0.8)'
                }}>
                    <img style={{display:'inline',position:'relative',height:'85px',width:'80px',borderRadius:"20px",margin:"5px 5px" }} src={pic3}></img>
                    <div className="labelItem">
                        {groupName}
                    </div>
                    <div className="labelItem">
                        {timestamp}
                    </div>
                    <div className="labelItem">
                        {/* {score}{description} */score}
                    </div>
                
            </div>
        )
    }
    else
        return (
        <div style={{
            width:'80%',
            height:"100px",
            backgroundColor:"white",
            margin:"20px auto",
            textAlign:"center",
            border:"2px solid rgba(200,191,231,0.5)",
            borderRadius:"20px",
            display:'flex',
            alignContent: 'center'
            }}>
                <div className="labelItem">
                    {groupName}
                </div>
                <div className="labelItem">
                    {timestamp}
                </div>
                <div className="labelItem">
                    {/* {score}{description} */score}
                </div>
            
        </div>
    )
}