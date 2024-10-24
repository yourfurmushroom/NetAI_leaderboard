export default function LeaderBoardItem({description})
{
    
    return (
        <div style={{
            width:'80%',
            height:"100px",
            backgroundColor:"white",
            margin:"20px auto",
            textAlign:"center",
            border:"2px solid rgba(200,191,231,0.5)",
            borderRadius:"20px"
            }}>
               {description}
        </div>
    )
}