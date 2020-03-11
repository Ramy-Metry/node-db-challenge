const db = require('../data/knexConfig');
const projectsDb = require('./projectsModule');
const express = require('express');
const router = express();

router.get('/projects/', async (req, res) => {
	try {
		const projects = await projectsDb.findProjects();
		res.json(projects);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});
router.post('/projects/', async (req, res) => {
	try {
		const project = await projectsDb.addProject(newProject);
		res.json(project);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});

router.get('/resources', async (req, res) => {
	try {
		const resources = await projectsDb.findResources();
		res.json(resources);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});

router.post('/projects/:id/resources', async (req, res) => {
	try {
		const data = {
			...req.body,
			project_id: req.params.id
		};
		const addedResources = await db('Resources as r').insert(data).where('r.project_id', req.params.id);
		const resourceId = await (await db('resources')).length;
		const newRP = { project_id: req.params.id, resource_id: resourceId };
		await db('P_R').insert(newRP);
		res.json(addedResources);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});

router.get('/tasks', async (req, res) => {
	try {
		const Tasks = await projectsDb.findTasks();
		res.json(Tasks);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});

router.post('/projects/:id/tasks', async (req, res) => {
	try {
		const data = {
			...req.body,
			project_id: req.params.id
		};
		const addedTasks = await db('Tasks as t').insert(data).where('t.project_id', req.params.id);
		res.json(addedTasks);
	} catch (err) {
		res.status(500).json({ err: 'server error' });
	}
});



module.exports = router;
