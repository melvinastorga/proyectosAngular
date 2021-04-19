import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  enMayusculas: boolean = true 

  upperLowerCase(){
    if (this.enMayusculas) {
        this.enMayusculas = false;
    }else{
        this.enMayusculas = true;
    }
}

heroes: Heroe[] = [
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.verde
  },
  {
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Linterna Verde',
    vuela: true,
    color: Color.verde
  }
]

opcion: string = 'nombre';

cambiaOpcion(opcion: string){

  if(opcion == "nombre"){
    this.opcion = opcion;
  }else if(opcion == "vuela"){
    this.opcion = opcion;
  }else if(opcion == "color"){
    this.opcion = opcion;
  }

}

}
