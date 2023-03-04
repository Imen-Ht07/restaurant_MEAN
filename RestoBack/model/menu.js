const mongoose = require("mongoose");
//declaration des attributs 
const menuSchema = new mongoose.Schema({
    imageFood:{type:String},
    nameFood:{ type:String},
    price:{ type:Number},
    ingredient:{ type:String},
});
//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("menu",menuSchema);