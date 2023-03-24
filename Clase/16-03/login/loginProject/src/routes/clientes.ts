import { Router } from "express";
import ClienteController from "../controller/ClienteController";


const router=Router();

router.get('',ClienteController.get)
router.delete('/:cedula',ClienteController.delete)
router.post('/create',ClienteController.create)
router.patch('/update:cedula',ClienteController.update)

export default router