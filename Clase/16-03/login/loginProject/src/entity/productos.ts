import { IsBoolean, IsDecimal, IsInt,IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { categorias } from "./categorias";


@Entity()
export class Productos{


@PrimaryColumn()
@IsInt()
@IsNotEmpty()
id:number;

@Column()
@IsString()
nombre:string;



@Column()
@IsNotEmpty()
precio:number;

@Column()
@IsBoolean()
@IsNotEmpty()
estado:boolean;

@ManyToOne(()=>categorias,(categoria)=>categoria.productos)
categoria:categorias

}


