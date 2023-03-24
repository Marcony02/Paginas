import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CannotExecuteNotConnectedError, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./productos";

@Entity()
export class categorias{
    @PrimaryGeneratedColumn()
    @IsInt()
    @IsNotEmpty()
    id:number;
    
    @Column()
    @IsString()
    nombre:string;
    
    @Column()
    @IsBoolean()
    @IsNotEmpty()
    estado:boolean;
    
    @OneToMany(()=>Productos,(prod)=>prod.categoria)
    productos:Productos[]



}

