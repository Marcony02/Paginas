import { validate } from "class-validator";
import { Request, Response } from "express";
import { request } from "http";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { categorias } from "../entity/categorias";
import { Productos } from "../entity/productos";


   class ProductosController {


    static get = async (req: Request, res: Response) => {

        console.log('hola');
        const productosRepo = AppDataSource.getRepository(Productos)

        const lista = await productosRepo.find({ where: { estado: true } , relations:['categoria']});

        if (lista.length > 0) {
            return res.status(200).json(lista)

        } else {

            return res.status(400).json({ message: 'No hay datos' })

        }
    }

    static getByid = async (req: Request, res: Response) => {

        const id = parseInt(req.params['id'])

        const productosRepo = AppDataSource.getRepository(Productos)

        if (!id) {

            return res.status(400).json({ message: 'No se indica el ID' })

        }

        try {
            const producto = await productosRepo.findOneOrFail({ where: { id, estado: true } });
            return res.status(200).json(producto)

        } catch (error) {

            return res.status(400).json({ message: 'No se encontro el ID indicado' })

        }


    }

    static delete = async (req: Request, res: Response) => {



        const productosRepo = AppDataSource.getRepository(Productos)
        const id = parseInt(req.params['id'])

        let producto: Productos

        try {
            producto = await productosRepo.findOneOrFail({ where: { id } });


        } catch (error) {

            return res.status(400).json({ message: 'No se encontro el ID indicado' })

        }
        producto.estado = false;

        await productosRepo.save(producto)

        return res.status(200).json({ message: 'El producto se ha elimado' })
    }

    static create = async (req: Request, res: Response) => {

        const { id, nombre,idCategoria, precio } = req.body


       

        //validar datos de entradas
        //regla de negocio para validar datos de entrada,campos que no permiten nulo
        
        if(!id){

            return res.status(400).json({message:'Falta el id'})

        }
        else if(!idCategoria){

            return res.status(400).json({message:'Falta idcategoria'})

        }
       
        const productosRepo = AppDataSource.getRepository(Productos)
        const categoriaRepo = AppDataSource.getRepository(categorias)

       
        
        if(await productosRepo.findOne({where:{id}})){
            return res.status(400).json({message:'Ya existe un producto con ese id'})
        }
        
        let categoria:categorias;

        try {
            categoria=await categoriaRepo.findOneByOrFail({id:idCategoria});
        } catch (error) {
            return res.status(404).json({message:'No existe la categoria indicada'})
        }


      let producto = new Productos();
      producto.id=id;
      producto.nombre=nombre;
      producto.precio=precio;
      producto.categoria=categoria;
      producto.estado=true;
   
      const errors= await validate(producto, {validationError: {target:false }})
      if(errors.length>0){

       return res.status(400).json(errors)

      }

        await productosRepo.save(producto)
        res.status(201).json({messaje:'Se ingreso el producto'})
        
        
       
    }


    static update = async (req: Request, res: Response) => {

        const id = parseInt(req.params['id'])
        const { nombre,idCategoria, precio } = req.body



        const productosRepo = AppDataSource.getRepository(Productos)
        const categoriaRepo = AppDataSource.getRepository(categorias)
        let producto:Productos;

        try {
            producto = await productosRepo.findOneOrFail({ where: { id } });


        } catch (error) {

            return res.status(400).json({ message: 'No se encontro el ID indicado' })

        }

        let categoria:categorias;

        try {
            categoria=await categoriaRepo.findOneByOrFail({id:idCategoria});
        } catch (error) {
            return res.status(404).json({message:'No existe la categoria indicada'})
        }





        producto.nombre=nombre;
        producto.categoria=categoria;
        producto.precio=precio;
        producto.estado=true;

       const errors= await validate(producto)
       if(errors.length>0){

        return res.status(400).json(errors)

       }

        await productosRepo.save(producto)

        return res.status(201).json({message:'El producto se ha actualizado'})



    }




}
export default ProductosController;