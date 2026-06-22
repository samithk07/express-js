const express=require("express")
const app=express()


app.use(express.json())

app.post("/login",(req,res)=>{
     console.log("Body:", req.body);
    const {user,password}=req.body
    if(user==="admin"&&password==="123"){
        res.json({
            message:"Login Successful"
        })
    }else{
        res.json({
            message:"Invalid Username or Password"
        })
    }
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})