const { Project } = require("../models");

const projectData = [
  {
    name: "Project 1",
    description: "Math Homework",
    due_date: "2023-09-30",
    user_id: 1,
  },
  {
    name: "Challenge 1",
    description: "Marathon Plan",
    due_date: "2023-09-30",
    user_id: 1,
  },
  {
    name: "Trip 1",
    description: "Europe trip",
    due_date: "2023-09-30",
    user_id: 1,
  },
];

const seedProjectData = () => Project.bulkCreate(projectData);
module.exports = seedProjectData;
