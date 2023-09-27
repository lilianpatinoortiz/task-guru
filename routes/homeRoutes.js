const router = require("express").Router();
const { Project, User, Task } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });
    const user = userData.get({ plain: true });

    const projectData = await Project.findAll({
      include: [User, Task],
    });
    const projects = projectData.map((project) => project.get({ plain: true }));

    const taskData = await Task.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));
    const totalTasks = tasks.length ? tasks.length : 0;
    const completedTaks = taskData.filter((task) => task.status !== "new");
    const totalCompletedTaks = completedTaks.length ? completedTaks.length : 0;
    const tasksDueSoon = taskData
      .map((task) => task.get({ plain: true }))
      .sort(function (x, y) {
        return x.due_date - y.due_date;
      })
      .slice(0, 5); // order tasks asc by due_date, get the top 5

    res.render("homepage", {
      ...user,
      projects,
      tasks,
      totalTasks,
      totalCompletedTaks,
      tasksDueSoon,
      logged_in: true,
    });
  } catch (err) {
    res.redirect("/login");
  }
});

router.get("/myguru", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    const projectData = await Project.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [User, Task],
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    const taskData = await Task.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.render("myguru", {
      ...user,
      projects,
      tasks,
      logged_in: true,
    });
  } catch (err) {
    res.redirect("/homepage");
  }
});

// Use withAuth middleware to prevent access to route
router.get("/homepage", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });
    const user = userData.get({ plain: true });

    const projectData = await Project.findAll({
      include: [User, Task],
    });
    const projects = projectData.map((project) => project.get({ plain: true }));

    const taskData = await Task.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));
    const totalTasks = tasks.length ? tasks.length : 0;
    const completedTaks = taskData.filter((task) => task.status !== "new");
    const totalCompletedTaks = completedTaks.length ? completedTaks.length : 0;
    const tasksDueSoon = taskData
      .map((task) => task.get({ plain: true }))
      .sort(function (x, y) {
        return x.due_date - y.due_date;
      })
      .slice(0, 5); // order tasks asc by due_date, get the top 5

    res.render("homepage", {
      ...user,
      projects,
      tasks,
      totalTasks,
      totalCompletedTaks,
      tasksDueSoon,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [User, Task],
    });

    const project = projectData.get({ plain: true });

    res.render("project", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/projects", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [User, Task],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const taskData = await Task.findByPk(req.params.id, {
      include: [User, Project],
    });

    const task = taskData.get({ plain: true });

    res.render("tasks", {
      ...task,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const taskData = await Task.findAll({
      include: [User, Project],
    });

    // Serialize data so the template can read it
    const tasks = taskData.map((task) => task.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("task", {
      tasks,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("signup");
});

router.get("/newtask", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("newtask", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newproject", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("newproject", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/editproject/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [Task],
    });

    const project = projectData.get({ plain: true });

    res.render("editproject", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/myguru", async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    const projectData = await Project.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [User, Task],
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    const taskData = await Task.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));

    // Sort tasks by due_date in ascending order
    tasks.sort((a, b) => {
      return new Date(a.due_date) - new Date(b.due_date);
    });

    res.render("homepage", {
      ...user,
      projects,
      tasks, // Pass the sorted tasks
      logged_in: true,
    });
  } catch (err) {
    res.redirect("/homepage");
  }
});

module.exports = router;
