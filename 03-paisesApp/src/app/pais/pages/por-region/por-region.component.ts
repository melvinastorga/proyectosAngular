import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
regionActiva: string = '';
paisesPorRegion: Country[] = [];
termino: string = '';
hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region:string ) : string {
    return (region === this.regionActiva) ? 'btn btn-success': 'btn btn-outline-success';
  }

  activarRegion( region: string) {
    this.regionActiva = region;
    this.paisesPorRegion
    this.hayError = false;
    this.termino = region;

    this.paisService.buscarRegion(region)
      .subscribe( paises =>{
        
        console.log(paises);
        this.paisesPorRegion = paises;
      }, (err) =>{ 
        this.hayError = true;
        this.paisesPorRegion = [];
      })

    //TODO: hacer el llamado al servicio, para traer los paises por esa region.
  }

}
