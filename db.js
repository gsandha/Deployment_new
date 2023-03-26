const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://gsandha:gagangagan@cluster0.zhilydl.mongodb.net/authLecture?retryWrites=true&w=majority")

module.exports={
    connection
}