import { Request, Response } from "express";
import { request } from "http";
import { AppDataSource } from "../data-source";
import {  clientes } from "../entity/clientes";


class ClienteController {


    static get = async (req: Request, res: Response) => {


        const ClienteRepo = AppDataSource.getRepository(clientes)

        const lista = await ClienteRepo.find({ where: { estado: true } });

        if (lista.length > 0) {
            return res.status(200).json(lista)

        } else {

            return res.status(400).json({ message: 'No hay datos' })

        }
    }

    static getById = async (req: Request, res: Response) => {
        //pasar datos por id
        const ClientesRepo = AppDataSource.getRepository(clientes);
        // parseamos el ID a Int
        const cedula= parseInt(req.params['cedula']);
        if (!cedula) { //si no idica el ID manda un msnJson
            return res.status(400).json({ message: 'no se indico id' })
        }
        try { // si lo encuantra manda la respuesta en Json
            const clientes = await ClientesRepo.findOneOrFail({ where: { cedula: cedula, estado: true } })
            return res.status(200).json(clientes)

        } catch (error) { //si no encuantra el ID manda un msnJson
            return res.status(400).json({ message: 'no se encontro con el id' })

        }

    }

    static delete = async (req: Request, res: Response) => {

        const clientesRepo = AppDataSource.getRepository(clientes)
        const cedula = parseInt(req.params['cedula'])

        let cliente: clientes

        try {

            cliente = await clientesRepo.findOneOrFail({ where: { cedula , estado:true} });


        } catch (error) {

            return res.status(400).json({ message: 'No se encontro el id indicado' })

        }
        cliente.estado = false

        await clientesRepo.save(cliente)

        return res.status(200).json({ message: 'El cliente se ha eliminado' })

    }


    static create = async (req: Request, res: Response) => {

        const { cedula, nombre, apellido1, apellido2, email, fecha } = req.body

        console.log(req);

        if (!cedula) {

            return res.status(400).json({ message: 'Falta el cedula' })

        } else if (!nombre) {

            return res.status(400).json({ message: 'Falta el nombre' })
        }

        else if (!apellido1) {

            return res.status(400).json({ message: 'Falta el apellido1' })

        } else if (!apellido2) {


            return res.status(400).json({ message: 'Falta el apellido2' })
        }

        else if (!email) {

            return res.status(400).json({ message: 'Falta el email' })

        } else if (!fecha) {


            return res.status(400).json({ message: 'Falta el fecha' })
        }

        const clientesRepo=AppDataSource.getRepository(clientes)

        if (await clientesRepo.findOne({ where: { cedula } })) {
            return res.status(400).json({ mesaage: 'La cedula ya existe' });
        }

        try{
            let cliente = new clientes
            cliente.cedula = cedula;
            cliente.nombre = nombre;
            cliente.apellido1 = apellido1;
            cliente.apellido2 = apellido2;
            cliente.email = email;
            cliente.fecha = fecha;

            await clientesRepo.save(cliente);
          
            return res.status(201).json({ message: 'El cliente fue creado' })

        } catch (error) {
            return res.status(400).json({ message: 'Los datos estan incompletos o erroneos' })
        }
    


    }


    static update = async (req: Request, res: Response) => {

      
        const cedula = parseInt(req.params['cedula'])
        const { nombre, apellido1, apellido2, email, fecha } = req.body;


      

         if (!nombre) {

            return res.status(400).json({ message: 'Falta el nombre' })
        }

        else if (!apellido1) {

            return res.status(400).json({ message: 'Falta el apellido1' })

        } else if (!apellido2) {


            return res.status(400).json({ message: 'Falta el apellido2' })
        }
        else if (!email) {


            return res.status(400).json({ message: 'Falta el email' })
        }
        else if (!fecha) {


            return res.status(400).json({ message: 'Falta la fecha' })
        }

        const clientesRepo = AppDataSource.getRepository(clientes)
        let cliente:clientes;

        try {
            cliente = await clientesRepo.findOneOrFail({ where: { cedula:cedula, estado:true } });


        } catch (error) {

            return res.status(400).json({ message: 'No se encontro la cedula  indicado' })

        }

        cliente.nombre=nombre;
        cliente.apellido1=apellido1;
        cliente.apellido2=apellido2;
        cliente.email=email;
        cliente.fecha=fecha;
        await clientesRepo.save(cliente)

        return res.status(200).json({message:'El cliente se ha actualizado'})
    }


}
export default ClienteController;