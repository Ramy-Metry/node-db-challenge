exports.seed = async function(knex) {
	// Deletes ALL existing entries
	await knex('Projects').del().then(async function() {
		// Inserts seed entries
		await knex('Projects').insert([
			{ id: 1, name: 'node', description: 'do some node stuff', completed: false },
			{ id: 2, name: 'java', description: 'play some java', completed: true },
			{ id: 3, name: 'sql', description: 'add some sql', completed: false }
		]);
	});
	await knex('Resources').del().then(async function() {
		// Inserts seed entries
		await knex('Resources').insert([
			{ id: 1, name: 'computer', description: 'hp computer', project_id: 1 },
			{ id: 2, name: 'mouse', description: 'microsoft mouse', project_id: 1 },
			{ id: 3, name: 'screen', description: 'black wide screen', project_id: 2 }
		]);
	});
	await knex('Tasks').del().then(async function() {
		// Inserts seed entries
		await knex('Tasks').insert([
			{
				id: 1,
				description: 'run the computer',
				notes: 'aaaaa',
				completed: false,
				project_id: 1
			},
			{ id: 2, description: 'setup the computer', notes: 'aaaaassdfrg', completed: false, project_id: 1 },
			{ id: 3, description: 'connect the screen', notes: 'dddddddd', completed: false, project_id: 2 }
		]);
  });
  await knex('P_R').del().then(async function() {
		// Inserts seed entries
		await knex('P_R').insert([
			{ project_id: 1, Resource_id:1 },
			{ project_id: 1, Resource_id:2 },
      { project_id: 2, Resource_id:3 },
      { project_id: 3, Resource_id:1 },
      { project_id: 2, Resource_id:2 },
		]);
	});
};
