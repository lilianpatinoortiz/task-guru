const router = require('express').Router();
const projectRoutes = require('./api/project-routes');
const taskRoutes = require('./api/task-routes');
const userRoutes = require('./api/user-routes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api/projects', projectRoutes);
router.use('/api/tasks', taskRoutes);
router.use('/api/users', userRoutes);

module.exports = router;