const express=require('express')
const route=express.Router();
const StudModel=require('../model/Student');


route.post('/register',(req,res)=>{
    if(req.body._id == ""){
        let formData = new StudModel({
            Name:req.body.Name,
            Email :req.body.email,
            Father_name :req.body.fname,
            Password : req.body.pwd,
            Phone : req.body.phno
        });
        // console.log(req.body);
            formData.save((err,data)=>{
            if(err) console.log(err)
            console.log(data);
        })
        res.redirect('/');
    }
    else
    {   console.log(req.body);
        // console.log("Hello"+req.body._id);
        StudModel.findOneAndUpdate({_id:req.body._id},
            {   Name:req.body.Name,
                Email :req.body.email,
                Father_name :req.body.fname,
                Password : req.body.pwd,
                Phone : req.body.phno
            },
            {new: true, useFindAndModify:false},(err,docs)=>{
            if(!err) res.redirect('/');
        })
    }
});

// Edit 
route.get('/:id',(req,res)=>{
    StudModel.findById(req.params.id,(err,docs)=>{
        if(err) throw err;
        res.render('students/form',{docs});    
    });
});

//Delete data
route.get('/delete/:id',(req,res)=>{
    StudModel.findOneAndDelete({_id: req.params.id},(err,result)=>{
        // console.log('here comes the id');
        if(err) throw err;
        else { 
            // console.log('before redirect');
            res.redirect('/delete')
            // console.log('after redirect')
        }

    });
});
module.exports = route;