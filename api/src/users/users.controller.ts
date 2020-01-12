import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserDto } from 'src/dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.'
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async addUser(@Body() userData: UserDto) {
    return await this.userService.createUser(userData);
  }
}
