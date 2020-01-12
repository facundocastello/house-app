import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/tasks.entity';
import { Repository } from 'typeorm';
import { TaskDto } from 'src/dto/task.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find({ relations: ['created_by'] });
  }

  async createTask(taskDoDto: TaskDto): Promise<Task> {
    const newTask = new Task();
    newTask.title = taskDoDto.title;
    newTask.description = taskDoDto.description;
    newTask.repeat_period = taskDoDto.repeat_period;
    newTask.repeat_interval = taskDoDto.repeat_interval;
    newTask.exception_period = taskDoDto.exception_period;
    newTask.exception_number = taskDoDto.exception_number;

    const getUser = await this.userRepository.findOne({
      user_id: taskDoDto.created_by,
    });
    newTask.created_by = getUser;
    return this.taskRepository.save(newTask);
  }
}
