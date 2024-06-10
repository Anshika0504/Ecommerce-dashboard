const express=require('express');
const cors=require("cors");
require('./db/config');
const User=require('./db/User');
const app=express();
const Product=require("./db/Product");
app.use(express.json());
app.use(cors());
app.post("/register",async (req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
resp.send(result);
})



app.post("/login",async (req,resp)=>{
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select("-password");
if(user){
    resp.send(user)
}
else{
    resp.send({result:"No user found"});
}
    }
else{
    resp.send({result:"No result found"});
}

})

app.post("/add-product", async (req,resp)=>{
let product=new Product(req.body);
let result=await product.save();
resp.send(result);
});




})

app.listen(5000);