import { Test, TestingModule } from '@nestjs/testing';
import { ToDosService } from './to-dos.service';
import { ToDosController } from './to-dos.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ToDo } from '../entities/to-do.entity';
import { Repository, Connection, createConnection, getConnection, getRepository } from 'typeorm';

describe('ToDos Controller', () => {
  let connection: Connection;
  let controller: ToDosController;
  let service: ToDosService;
  // declaring the repo variable for easy access later
  let repo: Repository<ToDo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDosController],
      providers: [
        ToDosService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(ToDo),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },
      ],
    }).compile();

    connection = await createConnection();

    repo = getRepository(ToDo);
    service = new ToDosService(repo);
    controller = module.get<ToDosController>(ToDosController);
  });

  afterEach(async () => {
    await getConnection('default').close()
  });  

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', async () => {
    // mock file for reuse
    const value = [new ToDo];
    const expectedTodos = await connection.manager.find(ToDo);
    console.log(expectedTodos);
    const getTodos = await service.findAll();
    console.log(getTodos);
    expect(expectedTodos).toEqual(getTodos);
  });
});
