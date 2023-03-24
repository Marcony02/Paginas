import "reflect-metadata"
import { DataSource } from "typeorm"
import { cliente} from "./entity/cliente"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "marco",
    password: "1234",
    database: "cliente",
    synchronize: true,
    logging: false,
    entities: [User,cliente],
    migrations: [],
    subscribers: [],
})
