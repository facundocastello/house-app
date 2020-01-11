import { Controller, Get, Post, Body } from '@nestjs/common';
import { ToDosService } from './to-dos.service';
import { ToDo } from '../entities/to-do.entity';
import { ToDoDto } from 'src/dto/to-do-dto';

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
  async addToDo(@Body() toDoDto: ToDoDto): Promise<ToDo> {
    // const todos = await
    try {
      const toDos = await this.toDoService.createToDo(toDoDto);
      return toDos;
    } catch (e) {
      return e;
    }
  }
}
