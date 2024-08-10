const express = require('express');
const app = express();
const models = require('./models/models');
const cors = require('cors');
require('./db/connect');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


PORT = process.env.PORT  || 5001;


app.use("/registration",(req,res)=>{
    models.create(req.body)
    .then(project1=>res.send(project1))
    .catch(error=>res.send(error))
})
app.use ('/registration/login',(req,res)=>{
    const[gmail,pass]=req.body
    models.findOne({gmail:gmail})
    .then(user=>{
        if(user){
        if(user.pass === pass){
            res.json("success")
        }else{
            res.json("not found")
        }
        }
    })
    
})







app.get('/',(reg , res) =>{
    res.send('server is running')
})

app.listen(PORT,()=>{
    console.log(`server is runnig at port ${PORT}`);
})