import { Router } from "express";
import Empleado from "./Empleado";
import Puesto from "./Puesto";



const routes=Router();

routes.use('/Empleado',Empleado)
routes.use('/Puesto',Puesto)

export default routes;