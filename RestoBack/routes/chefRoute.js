const router = require("express").Router();
const Chefs = require("../model/chefs");
const multer = require("../multer");
// ajout d'image 
router.post('/add',multer.upload.single('imageChef'), (req, res) => {
   
    const chef = new Chefs({
      nameChef: req.body.nameChef,
      imageChef: req.file.path
    });
  
    console.log(chef);
  
    chef.save((err, newChef) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
      res.status(201).json({
        ok: true,
        chef: newChef,
      });
    });
  });
 

//select all 
  router.get('/chefs', (req, res) => {
    Chefs.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});

//Update 
router.put('/modifChef/:id', (req, res) => {
    Chefs.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then(() => {
            res.status(200).send("updated success")
        })
        .catch((error) => { console.log(error) });
});

//delete 
router.delete('/dltChef/:id', (req, res) => {
    Chefs.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Chef supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
  
  //select par nom
  router.get('/MenuByname', (req, res) => {
    Chefs.findOne({nameP: req.body.nameChef })
      .then(chef => res.status(200).json(chef))
      .catch(error => res.status(404).json({ error }));
  
  });
  //get par ID
  router.get("/get/:id", (req, res) => {
    Chefs.findById({ _id: req.params.id })
        .then((chef) => {
            res.status(200).send(chef)
        })
        .catch((error) => { console.log(error) });
}
);

  module.exports = router;

