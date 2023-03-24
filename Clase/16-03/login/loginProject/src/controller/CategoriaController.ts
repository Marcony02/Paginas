import assert = require("assert");
import { validate } from "class-validator";
import { Request, Response, response } from "express";
import { AppDataSource } from "../data-source";
import { categorias } from "../entity/categorias";


 class CategoriasController{


static get=async  (req:Request, res:Response)=>{


   
    const categoriaRepo = AppDataSource.getRepository(categorias)

    const lista = await categoriaRepo.find({ where: { estado: true } , relations:['categorias']});

    if (lista.length>0) {
        return res.status(200).json(lista)

    } else {

        return res.status(400).json({ message: 'No hay datos' })

    }
}


static getByid = async (req: Request, res: Response) => {

    const id = parseInt(req.params['id'])

    const CategoriasRepo = AppDataSource.getRepository(categorias)

    if (!id) {

        return res.status(400).json({ message: 'No se indica el ID' })

    }

    try {
        const producto = await CategoriasRepo.findOneOrFail({ where: { id, estado: true } });
        return res.status(200).json(producto)

    } catch (error) {

        return res.status(400).json({ message: 'No se encontro el ID indicado' })

    }


}

static delete = async (req: Request, res: Response) => {



    const CategoriaRepo = AppDataSource.getRepository(categorias)
    const id = parseInt(req.params['id'])

    let categoria:categorias

    try {
        categoria = await CategoriaRepo.findOneOrFail({ where: { id } });


    } catch (error) {

        return res.status(400).json({ message: 'No se encontro el ID indicado' })

    }
    categoria.estado = false;

    await CategoriaRepo.save(categoria)

    return res.status(200).json({ message: 'la categoria  se ha elimado' })
}

static create = async (req: Request, res: Response) => {

    const { id, nombre,idCategoria } = req.body

    if(!id){

        return res.status(400).json({message:'Falta el id'})

    }
    else if(!idCategoria){

        return res.status(400).json({message:'Falta idcategoria'})

    }
   

    const categoriaRepo = AppDataSource.getRepository(categorias)

   

    let categoria = new categorias();
   

    try {
        categoria=await categoriaRepo.findOneByOrFail({id:idCategoria});
    } catch (error) {
        return res.status(404).json({message:'No existe la categoria indicada'})
    }


  
  categoria.id=id;
  categoria.nombre=nombre;
 categoria.IdCategoria=Idcategoria


  const errors= await validate(categoria, {validationError: {target:false }})
  if(errors.length>0){

   return res.status(400).json(errors)

  }

    await categoriaRepo.save(categoria)
    res.status(201).json({messaje:'Se ingreso la categoria'})
    
    
   
}
static update = async (req: Request, res: Response) => {

    const id = parseInt(req.params['id'])
    const { nombre,idCategoria } = req.body



   
    const categoriaRepo = AppDataSource.getRepository(categorias)
   
    let categoria:categorias
    try {
        categoria = await categoriaRepo.findOneOrFail({ where: { id } });


    } catch (error) {

        return res.status(400).json({ message: 'No se encontro el ID indicado' })

    }

   

    try {
        categoria=await categoriaRepo.findOneByOrFail({id:idCategoria});
    } catch (error) {
        return res.status(404).json({message:'No existe la categoria indicada'})
    }
    categoria.nombre=nombre;
    categoria.Idcategoria=categoria;


   const errors= await validate(categoria)
   if(errors.length>0){

    return res.status(400).json(errors)

   }

    await categoriaRepo.save(categoria)

    return res.status(201).json({message:'El producto se ha actualizado'})



}
}
export default CategoriasController;