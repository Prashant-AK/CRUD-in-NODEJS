const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUDAPP',{useNewUrlParser:true, useUnifiedTopology: true},(err)=>{
    if(err) throw err;
    console.log("Mongodb Connection setup successfully");    
});
require('./Student');