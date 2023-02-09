import { Knex } from "knex";

const tableName = 'user'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema(process.env.DB_SCHEMA || 'public').createTable(tableName, (table) => {
    table.specificType('id', 'serial')
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema(process.env.DB_SCHEMA || 'public').dropTable(tableName)
}

