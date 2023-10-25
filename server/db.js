const mongoose=require("mongoose");
var mongoUrl="mongodb+srv://maryem:D6gDE9RPYFFafTJp@cluster0.k2q4lep.mongodb.net/"
mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true})
var db =mongoose.connection
db.on('connected',()=>{
    console.log('successful mongo db connection')
})
db.on('error',()=>{
    console.log('fail of mongo db connection')
})
module.exports=mongoose