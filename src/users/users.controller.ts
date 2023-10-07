import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('allUsers')
  getAllUsers() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('query')
  queryData(@Query() user) {
    const { username } = user;
    console.log(username);
    return this.usersService.findOne(username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('insert')
  insertUser(@Body() user) {
    const { username, password } = user;
    const params = new User();
    params.username = username;
    params.password = password;
    console.log('insert', params);
    return this.usersService.insertData(params);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('delete')
  deleteUser(@Body() user) {
    const { id } = user;
    console.log('id', user);
    return this.usersService.remove(id);
  }
}
