
export function up(knex) {
	return knex.schema.createTable('orders', (table) => {
		table.increments('id').primary()

		table.string('name')
		table.dateTime('date')

		table.integer('user_id').unsigned().notNullable()
		table.foreign('user_id').references('users.id').onDelete('CASCADE')

		table.timestamps(false, true)
	})
}

export function down(knex) {
	return knex.schema.dropTable('orders')
}
