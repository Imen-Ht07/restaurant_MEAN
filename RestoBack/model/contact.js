const mongoose = require("mongoose");
//declaration des attributs 
const contactSchema = new mongoose.Schema({
    nameC:{type:String},
    mailC:{ type:String},
    subject:{ type:String},
    messageC:{ type:String},
});
//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("contact",contactSchema);