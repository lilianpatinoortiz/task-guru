const { Task }  = require('../models');

const taskData = 
[
    {
        "name": "Page 10",
        "description": "Prolems 1-5",
        "due_date": "2023-09-30",
        "priority": 1,
        "user_id": 1,
        "project_id": 1
    }
];

const seedTaskData = () => Project.bulkCreate(taskData);
module.exports = seedTaskData;