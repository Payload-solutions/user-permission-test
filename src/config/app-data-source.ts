import 'reflect-metadata';

import { User } from '../entity/user.entity';
import { Appartment } from '../entity/appartment.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5432,
    username: "postgres",
    password: "arturo_root",
    database: "ViamaticaTest",
    synchronize: true,
    logging: true,
    //entities: [Post, Category],
    entities:[User, Appartment],
    subscribers: [],
    migrations: [],
});
