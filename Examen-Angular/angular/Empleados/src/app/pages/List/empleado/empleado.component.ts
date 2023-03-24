import { Component, OnInit } from '@angular/core';
import { EmpleadosModel } from 'src/app/shared/Models/EmpleadosModel';
import { EmpleadosService } from 'src/app/shared/Services/empleados.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

Lista:EmpleadosModel[]=[];
lista:[]=[]

constructor(private EmpleadosSrv:EmpleadosService   ){}
 

 
displayedColumns:String[]=['idEmpleados','idPersonas','nombre1','apellido1','apellido2','email','telefono','idPuesto','nombre']
dataSource=[]



getEmpleados(url:string){

this.EmpleadosSrv.getEmpleados(url).subscribe((data:any)=>{
 this.lista=data;
this.dataSource=this.lista

console.log(this.dataSource)

})
}
ngOnInit(): void {

  this.getEmpleados("http://localhost:3000/Empleado")
    
  }

}
