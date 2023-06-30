import { createConnection } from 'typeorm';
import { User_1 } from 'src/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xinxin',
      database: 'mysql',
      entities: [
        User_1
      ],
      synchronize: true,
    }),
  },
];
