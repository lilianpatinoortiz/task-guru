const User = require("./User");
const Project = require("./Project");
const Task = require("./Task");

//A user can have multiple projects
User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//A user can have multiple tasks
User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//A project can have multiple tasks
Project.hasMany(Task, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});

//A project belongs to a user
Project.belongsTo(User, {
  foreignKey: "user_id",
});

//A task belongs to a project
Task.belongsTo(Project, {
  foreignKey: "project_id",
});

//A task belongs to a user
Task.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Project, Task };
