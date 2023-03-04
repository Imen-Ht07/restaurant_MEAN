const mongoose = require("mongoose");
//declaration des attributs 
const reservSchema = new mongoose.Schema({
    nameR:{type:String},
    mailR:{ type:String},
    telR:{type:Number},
    dateR:{type:Date},
    timeR:{type:Date},
    nmbr:{type:Number},
    messageR:{ type:String},
});
//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("reserv",reservSchema);