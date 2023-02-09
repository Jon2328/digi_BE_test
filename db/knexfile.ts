import { Knex } from "knex";
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })
const config: Knex.Config = {
  client: process.env.DB_CLIENT,
  connection: {
    host : process.env.DB_HOST,
    port : 5432,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  },
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
    loadExtensions: ['.ts']
  }
}

export = config