import { Router } from "express";
import categorias from "./categorias";

import clientes from "./clientes";
import productos from "./productos";



const routes=Router();

routes.use('/productos',productos)
routes.use('/clientes',clientes)
routes.use('/categoria',categorias)

export default routes;