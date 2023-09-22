const router = require('express').Router();
const {Project, Task, User} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const newUser = await User.create({
        ...req.body,
      });
  
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [Project, Task]
        });
        res.status(200).json(users);
    }catch (error){
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findOne({
            where: {id: req.params.id},
            include: [Project, Task]
        });
        res.status(200).json(users);
    }catch (error){
        res.status(500).json(error);
    }

});

router.put("/:id", async (req, res) => {
  // update user
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  
  module.exports = router;
  
