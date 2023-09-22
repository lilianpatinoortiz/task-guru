const router = require('express').Router();
const {Project, Task, User} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const newTask= await Task.create({
        ...req.body,
        //user_id: req.session.user_id,
      });
  
      res.status(200).json(newTask);
    } catch (error) {
      console.log (error);
      res.status(400).json(error);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const taskData = await Task.destroy({
        where: {
          id: req.params.id,
       }
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with this id!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll({
            include: [User, Project]
        });
        res.status(200).json(tasks);
    }catch (error){ 
        console.log (error);
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tasks = await Task.findOne({
            where: {id: req.params.id},
            include: [User, Project]
        });
        res.status(200).json(tasks);
    }catch (error){
        res.status(500).json(error);
    }

});

router.put("/:id", async (req, res) => {
  try {
    const taskData = await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!taskData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
