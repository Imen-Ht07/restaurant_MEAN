const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user:psw@cluster0.qjhwp.mongodb.net/resto")
.then(bd => console.log("database connected")) 
.catch(console.error());
