const { Project } = require("../models");

const projectData = [
  {
    name: "Project 1",
    description: "Math Homework",
    due_date: "2023-09-30",
    user_id: 1,
  },
  {
    name: "Project 2",
    description: "Science Homework",
    due_date: "2023-09-30",
    user_id: 1,
  },
  {
    name: "Project 3",
    description: "Marathon Plan",
    due_date: "2023-09-30",
    user_id: 1,
  },
  {
    name: "Project 4",
    description: "Europe trip",
    due_date: "2023-09-30",
    user_id: 2,
  },
];

const seedProjectData = () => Project.bulkCreate(projectData);
module.exports = seedProjectData;
