const router = require("express").Router();
const Contact = require("../model/contact");

router.post('/add', (req, res) => {
   
    const contact = new Contact({
      nameC: req.body.nameC,
      mailC: req.body.mailC,
      subject: req.body.subject,
      messageC: req.body.messageC,
     
    });
  
    console.log(contact);
  
    contact.save((err, newContact) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
      res.status(201).json({
        ok: true,
        contact: newContact,
      });
    });
  });
 //select all 
 router.get('/contact', (req, res) => {
    Contact.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});
//delete 
router.delete('/dltContact/:id', (req, res) => {
    Contact.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'message supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
  module.exports = router;