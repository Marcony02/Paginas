import { Router } from "express"
import EmpleadoController from "../controller/EmpleadoController";

const router=Router();

router.get('',EmpleadoController.get)
router.get('/:idEmpleados',EmpleadoController.getByid)
router.delete('/:idEmpleados',EmpleadoController.delete)
router.post('/create',EmpleadoController.create)
router.patch('/update/:idEmpleados',EmpleadoController.update)


export default router