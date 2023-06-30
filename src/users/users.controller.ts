import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User_1 } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createTable();
  }

  @Get('insert')
  insertData (@Query() Data){
    const { username, password, id } = Data;
    const params = new User_1();
    params.username = username;
    params.password = password;
    params.id = Number(id);
    console.log(params)
    return this.usersService.insertData(params);
  }
  
}
