//imports
const express=require("express")
const mongoose=require("mongoose")
const Book=require("./models/Book")

//using express in project
const app = express();
app.use(express.json());

//connecting to database by using mongoose
mongoose.connect("mongodb://localhost:27017/").then(()=>{console.log("connected mongoDB");
}).catch((err)=>{console.log("mongoDB err:",err);
})

//Create-->Post Address: /books
app.post("/books",async(req,res)=>{
    try{
    const newBook=new Book(req.body)
    const savedBook=await newBook.save()
    if(!savedBook) return res.status(404).json({message:"کتاب ذخیره نشده است"})
    res.json(savedBook)}catch(err){
        res.status(500).json({message:"خطای سرور" , error:err})
        }
})

//Read-->Get Address: /books
app.get("/books",async(req,res)=>{
    try{
    const books=await Book.find()
    if(books.length===0) return res.status(404).json({message:"کتابی یافت نشد"})
    res.json(books)}catch(err){
    res.status(500).json({message:"خطای سرور" , error:err})
    }
})

//Read a spacial book by id-->Get Address: /books/:id
app.get("/books/:id",async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "کتاب پیدا نشد" });
        res.json(book);
      } catch (err) {
        res.status(500).json({ message: "خطای سرور", error: err });
      }
})

//Update-->Put Address: /books/:id
app.put("/books/:id",async(req,res)=>{
    try{
    const updatedBook=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!updatedBook) return res.status(404).json({message:"کتاب آپدیت نشده است"})
    res.json(updatedBook)
    }catch(err){
        res.status(500).json({message:"خطای سرور" , error:err})
    }
})

//Delete-->Delete Address: /books/:id
app.delete("/books/:id",async(req,res)=>{
    try{
    const deletedBook=await Book.findByIdAndDelete(req.params.id);
    if(!deletedBook) return res.status(404).json({message:"کتاب حذف نشد"})
    res.json(deletedBook)
    }catch(err){
        res.status(500).json({message:"خطای سرور" , error:err})
    }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});