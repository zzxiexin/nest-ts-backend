import { Module, Dependencies } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';

const DatabaseModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'xinxin',
  database: 'test',
  entities: [User],
  synchronize: true,
  logging: true,
});
@Dependencies(DataSource)
@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
