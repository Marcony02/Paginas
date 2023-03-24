import "reflect-metadata"
import { DataSource } from "typeorm"
import { categorias } from "./entity/categorias"
import { clientes } from "./entity/clientes"
import { Productos } from "./entity/productos"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "loginClase",
    synchronize: true,
    logging: false,
    entities: [User,Productos,clientes,categorias],
    migrations: [],
    subscribers: [],
})
