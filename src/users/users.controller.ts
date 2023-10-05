import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('insert')
  insertData(@Query() Data) {
    const { username, password, id } = Data;
    const params = new User();
    params.firstName = username;
    params.lastName = password;
    // params.id = Number(id);
    console.log(params);
    return this.usersService.insertData(params);
  }
}
