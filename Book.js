const mongoose=require('mongoose');

//Book Schema
const bookSchema=new mongoose.Schema({
    title: String,        // عنوان کتاب
    author: String,       // نویسنده
    genre: String,        // ژانر (مثلاً رمان، تاریخی، علمی)
    publishedYear: Number // سال انتشار
})

//Book model by using Book Schema and Export that for using in other files
module.exports=mongoose.model("Book",bookSchema);