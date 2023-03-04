//importation
const express = require('express');
const app = express();
//Routes
const menu = require("./routes/menuRoute");
const contact = require("./routes/contactRoute");
const user = require("./routes/authRoute");
const admin = require('./routes/adminRoute');
const chefs = require("./routes/chefRoute");
const reserv = require("./routes/reservRoute");

//aide les ports de back et front a s'adapter 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  //pour les images BFR(Backend et Frontend Relation)
app.use('/uploads', express.static('uploads'));
  //USE express
app.use(express.json());
//other use
app.use('/menu', menu);
app.use('/contact',contact);
app.use('/user', user);
app.use('/admin',admin);
app.use('/chef',chefs);
app.use('/reserv', reserv);
//appel a database.js 
require('./database');

//serveur local 
app.listen(3000, () => {
    console.log("port started 3000");
});
