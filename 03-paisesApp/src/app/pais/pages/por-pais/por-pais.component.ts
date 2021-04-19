import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
         cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];
  
  paisesSugeridos : Country[] = [];

  constructor( private paisService: PaisService) { }

 buscar( termino: string){

  this.hayError = false;
  this.termino = termino;
  this.paisesSugeridos = [];
  
   this.paisService.buscarPais( this.termino)
      .subscribe( paises =>{
        
        console.log(paises);
        this.paises = paises;
      }, (err) =>{ 
        this.hayError = true;
        this.paises = [];
      })
 }

 sugerencias(sugerencia: string) {

  this.hayError = false;
  console.log(sugerencia,' desde por-pais');
  this.paisService.buscarPais( sugerencia )
    .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => {
      this.paisesSugeridos = []
    this.hayError = true
  });

  if (sugerencia == '') {
    this.paisesSugeridos = [];
  }
 }

}
