import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService : UsersService){}

  @Get()
  async getUsers(){
    return await this.userService.findAll();
  }

  @Post()
  async addUser(@Body() userData: UserDto ){
    return await this.userService.createUser(userData);
  }
}
