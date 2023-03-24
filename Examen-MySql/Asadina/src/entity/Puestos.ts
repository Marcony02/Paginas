
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from "./Empleado";

@Entity()

export class Puestos {

    @PrimaryGeneratedColumn()
    @IsInt()
    @IsNotEmpty()
    idPuesto: Number

    @Column()
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @Column({default:true})
    @IsBoolean()
    @IsNotEmpty()
    estado: boolean



    @OneToMany(() => Empleado, (emplo) => emplo.Puesto)
    Empleados: Empleado[]




}
