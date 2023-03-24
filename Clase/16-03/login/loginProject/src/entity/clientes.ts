import {Column, Entity,PrimaryColumn}  from "typeorm"

@Entity()
export class clientes{

@PrimaryColumn()
cedula:number;

@Column()
nombre:string

@Column()
apellido1:string;

@Column()
apellido2:string;

@Column()
email:string

@Column()
fecha:Date

@Column()
estado:boolean





}
