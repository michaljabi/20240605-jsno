
export function up(knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary()

		table.string('email').unique()
		table.string('password')

		table.timestamps(false, true)
	})
}

export function down(knex) {
	return knex.schema.dropTable('users')
}
