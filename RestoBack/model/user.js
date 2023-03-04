const mongoose = require("mongoose");
//declaration des attributs 
const userSchema = new mongoose.Schema({
    firstName:{ type:String},
    lastName:{ type:String},
    email:{ type:String},
    password:{type:String}
});
//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("User",userSchema);