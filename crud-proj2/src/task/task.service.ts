import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async create(Task: CreateTaskDto): Promise<InsertResult> {
    return await this.taskRepository.insert(Task);
  }

  async find(id: number): Promise<Task> | null {
    return await this.taskRepository.findOne({
      where: { task_id: id },
    });
  }

  async update(id: number, task): Promise<UpdateResult> {
    return await this.taskRepository.update(id, task);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
