const { Task } = require("../models");

const taskData = [
  {
    name: "Page 10",
    description: "Prolems 1-5",
    due_date: "2023-09-30",
    priority: 3,
    user_id: 1,
    project_id: 1,
    status: "new",
  },
  {
    name: "Eat healthy",
    description: "Do not eat dessert",
    due_date: "2023-09-30",
    priority: 1,
    user_id: 1,
    project_id: 3,
    status: "new",
  },
  {
    name: "Sleep 8 hours",
    description: "Track sleep in calm app",
    due_date: "2023-09-30",
    priority: 2,
    user_id: 1,
    project_id: 3,
    status: "new",
  },
  {
    name: "Buy the plane tickets",
    description: "Tickets with discount",
    due_date: "2023-09-30",
    priority: 1,
    user_id: 1,
    project_id: 4,
    status: "new",
  },
];

const seedTaskData = () => Task.bulkCreate(taskData);
module.exports = seedTaskData;
