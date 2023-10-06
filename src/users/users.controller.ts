import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('insert')
  insertData(@Query() user) {
    const { username, password } = user;
    const params = new User();
    params.username = username;
    params.password = password;
    console.log('insert', params);
    return this.usersService.insertData(params);
  }

  @Get('query')
  queryData(@Query() user) {
    const { username } = user;
    console.log(username);
    return this.usersService.findOne(username);
  }
}
