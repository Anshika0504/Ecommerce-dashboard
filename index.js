const express=require('express');
const app=express();
app.get("/",(req,resp)=>{
    resp.send("app has been made");
})
app.listen(3000);