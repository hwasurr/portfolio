import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'qwer1234',
        database: 'public',
        entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
        synchronize: !(process.env.NODE_ENV === 'production'),
      });

      return dataSource.initialize();
    },
  },
];
