const mongoose = require("mongoose");
//declaration des attributs 
const adminSchema = new mongoose.Schema({
    email:{ type:String},
    password:{type:String}
});
//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("Admin",adminSchema);