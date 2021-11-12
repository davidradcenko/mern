const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    links:[{type:mongoose.Types.ObjectId,ref:'Link'}]
})
//mongoose.model.exports=mongoose.model('User',User)


const  User   = mongoose.model('User',schema)
module.exports=User

//links:[{type:mongoose.Types.ObjectId,ref:'Link'}]