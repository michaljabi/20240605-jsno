export default {
  development: {
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '1234!',
      port: 3306,
      database : 'sql-database'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
