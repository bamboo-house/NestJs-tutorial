import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async getTaskList(): Promise<Task[]> {
    return await this.service.findAll();
  }

  @Post()
  async addTask(@Body() task: CreateTaskDto): Promise<InsertResult> {
    return await this.service.create(task);
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<Task> {
    return await this.service.find(+id);
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() task: UpdateTaskDto,
  ): Promise<UpdateResult> {
    return await this.service.update(+id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<DeleteResult> {
    return await this.service.delete(+id);
  }
}
