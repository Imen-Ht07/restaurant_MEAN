//require=importation 
const router = require("express").Router();
const { check, validationResult } = require("express-validator");
//npm install bcryptjs (Terminal)
const bcrypt = require("bcryptjs");
const Admin = require("../model/admin");
//Token
const config = require("../config");
const jwt = require("jsonwebtoken");

//Sign UP User
router.post('/register',
 [
    check("email").isEmail().withMessage("proper email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("min 6 chars for password"),
  ],
   async (req, res) => {
    let errors = validationResult(req);
    //if error containes
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
      let { email} = req.body;
      //user exist
      let admin = await Admin.findOne({ email });
      if (admin) {
        res.status(400).json("admin alredy exist");
      }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //const { email, password } = req.body;
    const newAdmin = new Admin({
        email: req.body.email,
        password: hashedPassword});
    await newAdmin.save();
    res.status(200).json("Admin succeffuly added");
    }
);

//SignIn User
router.post('/login', async (req, res) => {
    const { email, password} = req.body;

    const admin = await Admin.findOne({email});
    if (!admin) return res.status(401).send('The email doen\' exists');
    const validPassword = await bcrypt.compare(password, admin.password);
    if(!validPassword) return res.status(400).send("Incorrect Password");
    return res.status(200).json({admin, 
         token: jwt.sign({ data: admin}, config.secretKey)});

});

module.exports = router;


