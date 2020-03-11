// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './dev.sqlite3'
		},
		useNullAsDefault: true
	},

	pool: {
		afterCreate: (conn, done) => {
			// runs after a connection is made to the sqlite engine
			conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
		}
	}
};
