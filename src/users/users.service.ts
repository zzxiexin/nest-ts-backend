import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User_1 } from '../users/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async createTable(): Promise<void> {
    await this.entityManager.query('CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))');
  }

  async insertData(user: User_1): Promise<User_1> {
    await this.entityManager.save(user);
    return user;
  }
}
