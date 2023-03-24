import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodioModal } from 'src/app/shared/models/episodiosModel';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';

@Component({
  selector: 'app-episodios-detalle',
  templateUrl: './episodios-detalle.component.html',
  styleUrls: ['./episodios-detalle.component.css']
})
export class EpisodiosDetalleComponent {
  @Input() addEpisode: string;

  dataSource = []
  Episodio: EpisodioModal;


  constructor(private route: ActivatedRoute, private srvEpi: EpisodiosService) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.srvEpi.getEpisodiosById(id).subscribe((result: any) => {
        // this.dataSource = result;
        this.Episodio = result;
      })
    } else {
      const url = this.srvEpi.getUrlEpi()
      console.log(url)
      this.srvEpi.getEpisodiosByUrl(url).subscribe((result: any) => {
        // this.dataSource = result;
        this.Episodio = result;
      })
    }



  }
}



