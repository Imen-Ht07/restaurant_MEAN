const mongoose = require("mongoose");
//declaration des attributs 
const chefSchema = new mongoose.Schema({
    imageChef:{type:String},
    nameChef:{ type:String},
});
//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("Chef",chefSchema);