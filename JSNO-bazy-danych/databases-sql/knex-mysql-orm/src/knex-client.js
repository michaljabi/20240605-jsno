import Knex from 'knex';
import { Model } from 'objection';
import knexfile from '../knexfile.js';

const knex = Knex(knexfile.development);

Model.knex(knex);

export default knex;
