import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/entities/tasks.entity';
import { TaskDto } from 'src/dto/task-dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return await this.taskService.findAll();
  }
  @Post()
  async createTask(@Body() newTask: TaskDto): Promise<Task> {
    return await this.taskService.createTask(newTask);
  }
}
