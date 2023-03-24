import { Router } from "express";
import ClienteController from "../controller/ClienteController";



const router=Router();

router.get('',ClienteController.get)
router.delete('/:cedula',ClienteController.delete)

export default router