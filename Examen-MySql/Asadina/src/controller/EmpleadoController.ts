import { validate } from "class-validator";
import e = require("cors");
import { Request, Response } from "express";
import { permittedCrossDomainPolicies } from "helmet";
import { json } from "stream/consumers";
import { AppDataSource } from "../data-source";
import { Empleado } from "../entity/Empleado";
import { Personas } from "../entity/Personas";
import {  Puestos } from "../entity/Puestos";


class EmpleadoController {

    static get = async (req: Request, res: Response) => {

        const EmpleadoRepo = AppDataSource.getRepository(Empleado)
        


        const lista = await EmpleadoRepo.find({ where: { estado: true }, relations: ['Persona','Puesto'] })

        if (lista.length > 0) {

            return res.status(200).json(lista)

        } else {

            return res.status(400).json({ message: 'No hay datos' })

        }

       

    }

    static getByid = async (req: Request, res: Response) => {

        const idEmpleados = parseInt(req.params['idEmpleados'])
        const EmpleadoRepo = AppDataSource.getRepository(Empleado)

        if (!idEmpleados) {

            return res.status(400).json({ message: 'No se encuentra el id' })

        }

        try {
            const Empleado = await EmpleadoRepo.findOneOrFail({ where: { idEmpleados, estado: true },relations:['Persona','Puesto'] })
            return res.status(200).json(Empleado)

        } catch (error) {
            return res.status(400).json({ message: 'No se encuentra el Id indicado' })

        }


    }
    static delete = async (req: Request, res: Response) => {

        const EmpleadoRepo = AppDataSource.getRepository(Empleado)
        const PersonaRepo = AppDataSource.getRepository(Personas)
        const idEmpleados = parseInt(req.params['idEmpleados'])

        let Empleados: Empleado
        

        try {

            Empleados = await EmpleadoRepo.findOneOrFail({ where: { idEmpleados }})


        } catch (error) {

            return res.status(400).json({ message: 'No se ha encontrado el Id indicado' })

        }
            
      

        
        Empleados.estado = false;
    
        await EmpleadoRepo.save(Empleados)


        return res.status(200).json({ message: 'El empleado se ha eliminado' })


    }

    static create = async (req: Request, res: Response) => {


        const { idEmpleados,idPersonas, nombre1, apellido1, apellido2,email,telefono,idPuesto} = req.body


        if (!idEmpleados) {

            return res.status(400).json({ messaje: 'Falta el id' })

        } else if (!idPuesto) {

            return res.status(400).json({ message: 'Falta Puesto' })

        }

        const EmpleadoRepo = AppDataSource.getRepository(Empleado)
        const puestoRepo = AppDataSource.getRepository(Puestos)

        let puesto:Puestos;
        try {
            puesto = await  puestoRepo.findOneOrFail({ where: { idPuesto:idPuesto }})
        } catch (error) {
            return res.status(400).json({ message: 'NO se encuentra el puesto.' })
        }


        if (await EmpleadoRepo.findOne({ where: { idEmpleados } })) {

            return res.status(400).json({ message: 'El id ya se encuentra' })


        }

        let Persona = new Personas();
        Persona.idPersonas=idPersonas;
        Persona.nombre1 = nombre1;
        Persona.apellido1 = apellido1;
        Persona.apellido2 = apellido2;
        Persona.email=email;
        Persona.telefono=telefono;
        


        let Empleados = new Empleado();
        Empleados.idEmpleados=idEmpleados
        Empleados.Persona=Persona;
        Empleados.Puesto=puesto;
        Empleados.estado=true;
        

        
       

        const errors = await validate(Empleados, { validationError: { target: false } })

        if (errors.length > 0) {

            return res.status(400).json(errors)

        }
       
  
        await EmpleadoRepo.save(Empleados)
        res.status(200).json({ message: 'Se ingreso el empleado' })


    }

    static update = async (req: Request, res: Response) => {


        const idEmpleados = parseInt(req.params['idEmpleados'])
        
        const { nombre1, apellido1, apellido2,email,telefono,idPuesto } = req.body

        const EmpleadoRepo = AppDataSource.getRepository(Empleado)
        const PersonaRepo = AppDataSource.getRepository(Personas)
        const PuestoRepo = AppDataSource.getRepository(Puestos)
        let Empleados = new Empleado
        try {

            Empleados = await EmpleadoRepo.findOneOrFail({ where: { idEmpleados } })
        } catch (error) {

            return res.status(400).json({ message: 'No se encontro el id' })

        }
        let Puesto= new Puestos
        try {

            Puesto = await PuestoRepo.findOneOrFail({ where: { idPuesto } })
        } catch (error) {

            return res.status(400).json({ message: 'No se encontro el idpuesto' })

        }

        
        let Persona = new Personas();
       
        Persona.nombre1 = nombre1;
        Persona.apellido1 = apellido1;
        Persona.apellido2 = apellido2;
        Persona.email=email;
        Persona.telefono=telefono;
        


        let Emplead = new Empleado();
        Emplead.idEmpleados=idEmpleados
        Emplead.Persona=Persona;
        Emplead.Puesto=Puesto;
     
      
      


       

        const errors = await validate(Empleados, { validationError: { target: false, value: false } })

        if (errors.length > 0) {

            return res.status(400).json(errors)

        }
       
        await EmpleadoRepo.save(Emplead)


        return res.status(201).json({ message: 'Se ha actulizado el Empleado' })



    }
}
export default EmpleadoController