const sequelize = require('../config/connection');
const { User,Task, Project } = require('../models')

const seedUserData = require('./userData');
const seedTaskData = require('./taskData');
const seedProjectData = require('./projectData');


const seedAll = async () => {
    await sequelize.sync({force:true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUserData();
    console.log('\n----- PROJECT DATA SEEDED -----\n');

    await seedProjectData();
    console.log('\n----- USER TASK SEEDED -----\n');

    await seedTaskData();
    console.log('\n----- USER DATA SEEDED -----\n');
    process.exit(0);
};

seedAll();