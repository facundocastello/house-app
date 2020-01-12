import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDo } from '../entities/to-do.entity';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { ToDoDto } from 'src/dto/to-do.dto';

@Injectable()
export class ToDosService {
  constructor(
    @InjectRepository(ToDo)
    private readonly toDoRepository: Repository<ToDo>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<ToDo[]> {
    return this.toDoRepository.find({relations:['done_by']});
  }

  async createToDo(toDoDto: ToDoDto): Promise<ToDo> {
    const newToDo = new ToDo();
    newToDo.title = toDoDto.title
    newToDo.description = toDoDto.description
    newToDo.done = toDoDto.done
    newToDo.expirated = toDoDto.expirated    

    const getUser = await this.userRepository.findOne({ user_id: toDoDto.done_by });
    newToDo.done_by = getUser;
    return this.toDoRepository.save(newToDo);
  }
}
