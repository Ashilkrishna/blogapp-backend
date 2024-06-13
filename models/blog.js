const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "name":String,
    "email":String,
    "password":String

})
let blogmodel=mongoose.model("user",schema)
module.exports={blogmodel}