import { Router } from "express";
import { CategoriasController } from "../controller/CategoriaController";





const routes=Router();

routes.get('',CategoriasController.get)


export default routes;