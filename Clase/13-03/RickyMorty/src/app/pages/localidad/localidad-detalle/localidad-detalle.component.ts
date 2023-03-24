import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalidadModal } from 'src/app/shared/models/localidadModal';
import { LocalidadService } from 'src/app/shared/services/localidad.service';

@Component({
  selector: 'app-localidad-detalle',
  templateUrl: './localidad-detalle.component.html',
  styleUrls: ['./localidad-detalle.component.css']
})




export class LocalidadDetalleComponent implements OnInit {
localidad:LocalidadModal
  constructor(route: ActivatedRoute, srv:LocalidadService) {
    const id = route.snapshot.paramMap.get('id');
  
    srv.getlocalidadById(id).subscribe((result: any) => {
      this.localidad = result;
      console.log(this.localidad);
     });
  
     
  
  
  }
  
  ngOnInit(): void {}
  }



