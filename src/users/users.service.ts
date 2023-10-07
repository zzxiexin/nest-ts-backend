import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  insertData(params) {
    return this.usersRepository.insert(params);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async remove(id: number | string): Promise<void> {
    await this.usersRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id }) // 根据id字段进行删除
      .execute();
    // await this.usersRepository.delete(username);
  }
}
