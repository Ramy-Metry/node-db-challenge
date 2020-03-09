const db=require('../data/knexConfig')
const projectsDb=require('./projectsModule')
const express = require('express');
const router = express();

router.get('/projects', async (req, res) => {
	try {
		const projects = await projectsDb.findProjects()
		res.json(projects);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});
router.post('/projects/', async (req, res) => {
	try {
		const project = await projectsDb.addProject(req.body)
		res.json(project);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
})

router.get('/resources', async (req, res) => {
	try {
		const resources = await projectsDb.findResources()
		res.json(resources);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});
router.post('/resources/', async (req, res) => {
	try {
		const Resource = await projectsDb.addResource(req.body)
		res.json(Resource);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
})

router.get('/tasks', async (req, res) => {
	try {
		const Tasks = await projectsDb.findTasks()
		res.json(Tasks);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});

router.post('/tasks/', async (req, res) => {
	try {
		const Task = await projectsDb.addTask(req.body)
		res.json(Task);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
})



module.exports=router;