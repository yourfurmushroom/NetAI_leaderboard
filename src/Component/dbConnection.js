let mysql=require("mysql")

function ConnectToDB()
{
 return mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: 'Jet..123@2024!',
        database: 'netai_data_scients'
    })
}
function EndConnection(db)
{
    db.end();
}

function SqlCommand(db,cmd)
{
    db.query(cmd,(error,results,fields)=>{
        if(error)
        {
            throw error
        }
        return results
    })
}
   


export function Flow(type,userName)
{
    if(type === "login")
    {
        LoginFlow(userName)
    }
}

function LoginFlow(userName)
{
    try{
        let db=ConnectToDB()
        let cmd='select * in User where userName='+"'"+userName+"'"
        let request=SqlCommand(db,cmd)
        if(request.length<=0)
        {
            console.log("no user found")
        }
        EndConnection(db)
    }
    catch
    {
        alert("db connect failed")
        EndConnection(db)
    }
}