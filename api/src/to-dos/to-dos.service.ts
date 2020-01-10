import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDo } from '../entities/to-do.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToDosService {
  constructor(
    @InjectRepository(ToDo)
    private readonly toDoRepository: Repository<ToDo>,
  ) {}

  findAll(): Promise<ToDo[]> {
    return this.toDoRepository.find();
  }

  createToDo(): Promise<ToDo> {
    const newToDo = new ToDo();
    newToDo.title = 'title'
    newToDo.description = 'description'
    newToDo.repeat_period = 'daily'
    newToDo.repeat_interval = 1
    newToDo.done = false
    return this.toDoRepository.save(newToDo);
  }
}
