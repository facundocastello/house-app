import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { Task } from 'src/entities/tasks.entity';
import { TaskDto } from 'src/dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return await this.taskService.findAll();
  }
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.'
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createTask(@Body() newTask: TaskDto): Promise<Task> {
    return await this.taskService.createTask(newTask);
  }
}
