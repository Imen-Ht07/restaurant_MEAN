const router = require("express").Router();
const Menu = require("../model/menu");
const multer = require("../multer");
// ajout d'image 
router.post('/add',multer.upload.single('imageFood'), (req, res) => {
   
    const menu = new Menu({
      nameFood: req.body.nameFood,
      price: req.body.price,
      ingredient: req.body.ingredient,
      imageFood: req.file.path
    });
  
    console.log(menu);
  
    menu.save((err, newMenu) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
      res.status(201).json({
        ok: true,
        menu: newMenu,
      });
    });
  });
 

//select all 
  router.get('/menu', (req, res) => {
    Menu.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});

//Update 
router.put('/modifMenu/:id', (req, res) => {
    Menu.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then(() => {
            res.status(200).send("updated success")
        })
        .catch((error) => { console.log(error) });
});

//delete 
router.delete('/dltMenu/:id', (req, res) => {
    Menu.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Menu supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
  
  //select par nom
  router.get('/MenuByname', (req, res) => {
    Menu.findOne({nameFood: req.body.nameFood })
      .then(menu => res.status(200).json(menu))
      .catch(error => res.status(404).json({ error }));
  
  });
  //get par ID
  router.get("/get/:id", (req, res) => {
    Menu.findById({ _id: req.params.id })
        .then((menu) => {
            res.status(200).send(menu)
        })
        .catch((error) => { console.log(error) });
}
);

  module.exports = router;

