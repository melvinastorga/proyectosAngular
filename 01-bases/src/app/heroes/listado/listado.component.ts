import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

 heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
 heroesBorrados: string[] = [];
 is_Borrado = false;
 cantidad = this.heroes.length;

 borrarHeroe(){
  this.heroesBorrados.push(this.heroes.pop());
  this.is_Borrado = true;
  this.cantidad = this.heroes.length;
 }
}
