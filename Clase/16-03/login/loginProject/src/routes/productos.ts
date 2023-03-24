import { Router } from "express";
import ProductosController from "../controller/ProductsController";


const router=Router();

router.get('',ProductosController.get)
router.get('/:id',ProductosController.getByid)
router.delete('/:id',ProductosController.delete)
router.post('/create',ProductosController.create)
router.patch('/update:id',ProductosController.update)
export default router
