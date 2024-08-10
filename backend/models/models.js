const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired :true
    },
        
    password:{
         type:String,
         reuired :true
        },
    gmail:{
            type:String,
            reuired :true
           }
    
})
const models = mongoose.model("model",newSchema);
module.exports = models;