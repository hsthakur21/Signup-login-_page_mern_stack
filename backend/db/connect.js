const mongoose = require('mongoose');
uri = "mongodb://127.0.0.1:27017/projrct1";
mongoose.connect(uri ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection succeful")
}).catch((error)=>{
    console.log(error);
})