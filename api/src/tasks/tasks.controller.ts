import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/entities/tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async getTasks(): Promise<Task[]>{
    return await this.taskService.findAll()
  };
}
