import { Controller, Get, Post } from '@nestjs/common';
import { ToDosService } from './to-dos.service';
import { ToDo } from '../entities/to-do.entity';

@Controller('to-dos')
export class ToDosController {
  constructor(private readonly toDoService: ToDosService) {}

  @Get()
  async getToDos(): Promise<ToDo[]> {
    // const todos = await
    try {
      const toDos = await this.toDoService.findAll();
      return toDos;
    } catch (e) {
      return e;
    }
  }

  @Post()
  async addToDo(): Promise<ToDo> {
    // const todos = await
    try {
      const toDos = await this.toDoService.createToDo();
      return toDos;
    } catch (e) {
      return e;
    }
  }
}
