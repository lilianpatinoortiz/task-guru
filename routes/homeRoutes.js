const router = require("express").Router();
const { Project, User, Task } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
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
    res.render("login");
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
    res.render("homepage");
  }
});

// Use withAuth middleware to prevent access to route
router.get("/homepage", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    const projectData = await Project.findAll({
      include: [User, Task],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      ...user,
      ...projects,
      logged_in: true,
    });
  } catch (err) {
    res.render("homepage");
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

module.exports = router;
