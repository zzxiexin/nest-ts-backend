import { Module, Dependencies } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_1 } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';


const DatabaseConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'xinxin',
  database: 'mysql',
  entities: [],
  synchronize: true,
  logging: true
});
@Dependencies(DataSource)
@Module({
  imports: [DatabaseConfig, TypeOrmModule.forFeature([User_1]), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
