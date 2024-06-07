export function up(knex) {
    return knex.schema.alterTable('users', (table) => {
        table.string('last_name')
    })
}

export function down(knex) {
    return knex.schema.alterTable('users', (table) => {
        table.dropColumn('last_name')
    })
}
