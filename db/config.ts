import knex from 'knex'
import config from './knexfile'
export default function init() {
  return knex(config)
}
