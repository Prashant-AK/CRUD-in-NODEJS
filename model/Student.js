var mongoose = require('mongoose');

var studentSchema =new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Father_name:{type:String,required:true},
    Password:{type:String,required:true},
    Phone:{type:String,required:true}
});
var StudentModel = mongoose.model('Student',studentSchema);
module.exports = StudentModel;