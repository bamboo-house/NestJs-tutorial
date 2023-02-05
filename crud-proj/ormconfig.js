module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'sample',
  password: 'sample',
  database: 'sample',
  synchronize: true,
  entities: ['dist/entities/*.entity.js'], //追記
  migrations: ['dist/migrations/*.js'], //追記
  cli: {
    entitiesDir: './src/entities', //追記
    migrationsDir: './src/migrations', //追記
  },
};
