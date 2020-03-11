exports.up = async function(knex) {
	await knex.schema.createTable('Projects', (table) => {
		table.increments();
		table.text('name').notNull();
		table.text('description');
		table.boolean('completed').default(false);
	});
	await knex.schema.createTable('Tasks', (table) => {
		table.increments();
		table.text('description').notNull();
		table.text('notes');
		table.boolean('completed').default(false);
		table
			.integer('project_id')
			.unsigned()
			.references('id')
			.inTable('Projects')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
	await knex.schema.createTable('Resources', (table) => {
		table.increments();
		table.text('name').notNull().unique();
		table.text('description');
		table
			.integer('project_id')
			.unsigned()
			.references('id')
			.inTable('Projects')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
	await knex.schema.createTable('P_R', (table) => {
		table.integer('project_id').unsigned().references('id').inTable('Projects');
		table.integer('Resource_id').unsigned().references('id').inTable('Resources');
		table.primary([ 'project_id', 'Resource_id' ]);
	});
};
exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('P_R');
	await knex.schema.dropTableIfExists('Resources');
	await knex.schema.dropTableIfExists('Tasks');
	await knex.schema.dropTableIfExists('Projects');
};
