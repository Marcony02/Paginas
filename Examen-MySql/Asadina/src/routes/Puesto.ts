import { Router } from "express";
import PuestoController from "../controller/PuestoController";


const routes =Router()
routes.get('',PuestoController.get)

export default routes;