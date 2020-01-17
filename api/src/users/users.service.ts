import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find({ relations: ['to_dos'] });
  }

  async createUser(userData): Promise<User> {
    const newUser = new User();
    newUser.username = userData.username;
    newUser.password = userData.password;
    return this.userRepository.save(newUser);
  }
}
