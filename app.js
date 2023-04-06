const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bhavy:abcd%401234@website.ofh65qw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//const url = "mongodb+srv://bhavy:abcd%401234@website.ofh65qw.mongodb.net/?retryWrites=true&w=majority/lookDB";
const app = express();
const PORT = process.env.PORT || 3400;

const detail = require("./models/main"); 
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");


mongoose.connect(uri,(err)=>{
    if(err){
        console.log(`unabke to start ${err}`);
    }else{
        console.log("conection successfully to DB");
       
    }
});
app.post("/", (req, res)=>{
    const Detals = new detail({
        name:req.body.fsemail,
        email:req.body.fspass
    });
    Detals.save();
})
app.get("/work", (req, res)=>{
    detail.find({}, function(err, founditeam){
        res.render("logic", {keyy:founditeam})

    })
    
})

app.get("/", (req,res)=>{
    res.render("home")
});

app.listen(PORT, ()=>{
    console.log(`your port started on ${PORT}`);
});