import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import {cliente}




class ClienteController {


    static get = async (req: Request, res: Response) => {

      
        const productosRepo = AppDataSource.getRepository(cliente)

        const lista = await productosRepo.find({ where: { estado: true } });

        if (lista.length > 0) {
            return res.status(200).json(lista)

        } else {

            return res.status(400).json({ message: 'No hay datos' })

        }
    }

    static delete=async(req:Request,res:Response)=>{

        const clientesRepo = AppDataSource.getRepository(cliente)
        const cedula = parseInt(req.params['cedula'])

        let cliente:cliente

        try {
            
            cliente = await clientesRepo.findOneOrFail({ where: { cedula } });


        } catch (error) {
            
            return res.status(400).json({message:'No se encontro el id indicado'})

        }
        cliente.estado=false

        await clientesRepo.save(cliente)

        return res.status(200).json({message:'El cliente se ha eliminado'})

    }




    
}
export default ClienteController;