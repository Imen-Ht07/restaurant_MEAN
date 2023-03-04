const router = require("express").Router();
const Reserv = require("../model/reservation");

router.post('/add', (req, res) => {
   
    const reserv = new Reserv({
      nameR: req.body.nameR,
      mailR: req.body.mailR,
      telR: req.body.telR,
      dateR: req.body.dateR,
      timeR: req.body.timeR,
      nmbr: req.body.nmbr,
      messageR: req.body.messageR,
     
    });
  
    console.log(reserv);
  
    reserv .save((err, newReserv) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
      res.status(201).json({
        ok: true,
        reserv : newReserv,
      });
    });
  });
 //select all 
 router.get('/reservation', (req, res) => {
    Reserv.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});
// get by date 
router.get('/ReservByDate', (req, res) => {
    Reserv.findOne({dateR: req.body.dateR })
      .then(reserv => res.status(200).json(reserv))
      .catch(error => res.status(404).json({ error }));
  
  });
//delete 
router.delete('/dltReserv/:id', (req, res) => {
    Reserv.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'reservation supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
  module.exports = router;