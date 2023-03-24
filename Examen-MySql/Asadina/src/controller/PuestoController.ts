import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Puestos } from "../entity/Puestos";


class PuestoController{


    static get=async  (req:Request, res:Response)=>{
    
    
       
        const PuestoRepo = AppDataSource.getRepository(Puestos)
    
        const lista = await PuestoRepo.find({ where: { estado: true } , relations:['Puesto']});
    
        if (lista.length>0) {
            return res.status(200).json(lista)
    
        } else {
    
            return res.status(400).json({ message: 'No hay datos' })
    
        }
    }
}
export default PuestoController