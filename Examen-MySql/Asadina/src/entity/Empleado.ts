import { IsString } from "class-validator";
import { IsBoolean, IsInt, IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Personas } from "./Personas";
import { Puestos } from "./Puestos";


@Entity()
export class Empleado{

@PrimaryGeneratedColumn()
@IsInt()
@IsNotEmpty()
idEmpleados:number;

@Column({default:true})
@IsBoolean()
@IsNotEmpty()
estado:boolean

@ManyToOne(()=>Puestos,(Puestos)=>Puestos.Empleados)
Puesto:Puestos

@OneToOne(()=>Personas,(Personas)=>Personas.Empleados,{cascade:['insert','update']})
@JoinColumn()
Persona:Personas
}




