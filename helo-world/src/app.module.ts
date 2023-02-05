import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ItemsModule, UsersModule, ItemsModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
