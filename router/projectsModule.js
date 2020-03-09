const db = require('../data/knexConfig');

async function addProject(project) {
	const [ id ] = await db('Projects').insert(project);
	return db('Projects as p').where('p.id', id).first();
}
async function addResource(Resource) {
	const [ id ] = await db('Resources').insert(Resource);
	return db('Resources as r').where('r.id', id).first();
}
async function addTask(Task) {
	const [ id ] = await db('Tasks').insert(Task);
	return db('Tasks as t').where('t.id', id).first();
}

function findProjects() {
	return db('Projects').select('*');
}

function findResources() {
	return db('Resources').select('*');
}
function findTasks() {
	return db('tasks as t ').join('projects as p','p.id','t.project_id').select('t.*','p.name as project_name','p.description as project_description');
}

module.exports={
    addProject,
    addResource,
    addTask,
    findProjects,
    findResources,
    findTasks
}