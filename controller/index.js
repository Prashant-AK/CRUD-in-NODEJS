const express=require('express')
const route=express.Router();
const StudModel=require('../model/Student');

//Home Page 
route.get('/',(req,res)=>{
    res.render('students/home')
});

//Registeration form Page
route.get('/form',(req,res)=>{
    res.render('students/form')
})

//Display Student List
route.get('/display',(req,res)=>{
    StudModel.find((err,docs)=>{
        // console.log('in list'+docs);
        if(!err){
            res.render("students/list",{list:docs});
            // console.log(docs);
        }
    });
});

//Update from Home
route.get('/update',(req,res)=>{
    StudModel.find((err,docs)=>{
        // console.log('in list'+docs);
        if(!err){
            res.render('students/update',{list:docs});
            // console.log(docs);
        }
    });
});

//Delete from Home
route.get('/delete',(req,res)=>{
    StudModel.find((err,docs)=>{
        if(!err){
            res.render('students/del',{list:docs});
            
        }
    });
});


module.exports = route;