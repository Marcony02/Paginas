import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from "./Empleado";

@Entity()
export class Personas{

@PrimaryGeneratedColumn()
idPersonas:number;

@Column()
@IsString()
@IsNotEmpty()
nombre1:string;

@Column()
@IsString()
@IsNotEmpty()
apellido1:string;

@Column()
@IsString()
@IsNotEmpty()
apellido2:string;

@Column()

email:string;

@Column()
@IsInt()
telefono:number





@OneToOne(() => Empleado, (emplo) => emplo.Persona)
    Empleados: Empleado

}

