import { Blog } from './entities/blog.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       load: [configuration],
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         type: 'mysql',
//         host: configService.get('database.host'),
//         port: +configService.get('database.port'),
//         username: configService.get('database.username'),
//         password: configService.get('database.password'),
//         database: configService.get('database.database'),
//         entities: [Blog],
//         // migrations: configService.get('database.migrations'),
//         synchronize: true,
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sample',
      password: 'sample',
      database: 'sample',
      synchronize: false,
      entities: [], //追記
      migrations: ['../dist/migrations/*.js'], //追記
      // cli: {
      //   entitiesDir: './entities', //追記
      //   migrationsDir: './migrations', //追記
      // },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
