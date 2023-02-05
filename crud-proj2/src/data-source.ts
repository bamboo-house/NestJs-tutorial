import { Task } from './task/entities/task.entity';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: false,
  logging: true,
  entities: [User, Task],
  migrations: ['dist/migration/*.js'],
});
