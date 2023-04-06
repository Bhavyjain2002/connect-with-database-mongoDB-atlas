const mongoose = require('mongoose');


const lookschma = new mongoose.Schema ({
    name:String,
    email:String
});
const ditals = mongoose.model("detail", lookschma);




module.exports = ditals