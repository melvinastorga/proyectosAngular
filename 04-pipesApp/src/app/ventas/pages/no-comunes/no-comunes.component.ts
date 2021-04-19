import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
nombre: string = 'Melvin';
genero: string = 'masculino'

invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

// El i18nSelect Pipe es Case sensitive, si dice femenino, debe salir en el mapa femenino y no Femenino...


//i18nPlural Pipe  'Maria', 'Melvin', 'Fernando'

clientes: string[] = ['Melvin','Maria', 'Fernando', 'Diego', 'Melissa'];

clientesMapa = {
  '=0': 'no tenemos ningún cliente esperando',
  '=1': 'tenemos un cliente esperando',
  'other': 'tenemos # clientes esperando'
}

change(){
  if (this.genero == 'masculino') {
    this.nombre = 'María';
    this.genero = 'femenino';
  }else{
    this.nombre = 'Melvin';
    this.genero = 'masculino';
  }
  
}

delete(){
  console.log("eliminado papu!");
  this.clientes.shift();
}


//Key value pipe

persona = {
  nombre: 'Melvin',
  edad : 28,
  direccion: 'Paraíso, Cartago, Costa Rica'
}

//JsonPipe

heroes= [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Batman',
    vuela: false
  },
  {
    nombre: 'Acuaman',
    vuela: false
  },
  {
    nombre: 'Ironman',
    vuela: true
  },
]

//async Pipe
miObservable = interval(1000); // 0,1,2,3,4,5,6,

valorPromesa = new Promise( (resolve, reject) =>{
  setTimeout(() => {
    resolve( 'Tenemos data de promesa');
  }, 3500 );

});
}
