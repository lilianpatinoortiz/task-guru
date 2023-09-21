const sequelize = require('../config/connection');
const { User,Task, Project } = require('../models')

const userData = require('./userData.json');
const taskData = require('./taskData.json');
const projectData = require('./projectData.json');


const seedAll = async () => {
    await sequelize.sync({force:true});
    
   await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    
      for (const project of projectData) {
        await Project.create({
          ...project,
        });
      }
      
      for (const Task of taskData) {
        await Task.create({
          ...Task,
        });
        

      }
      process.exit(0);
    };
    
    seedDatabase();
    