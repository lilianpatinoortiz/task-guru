const { Project }  = require('../models');

const projectData = [
{ 
    "name": "Project 1",
    "description": "Math Homework",
    "due_date": "2023-09-30",
    "user_id": 1

}
];

const seedProjectData = () => Project.bulkCreate(projectData);
module.exports = seedProjectData;