import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{title}} </h1>
<h3>La base es: <strong> {{base}}</strong></h3>



<span>{{contador}}</span>
<br><br>
<button (click)="acumular('sumar',base)">Incrementar</button>
<br><br>
<button (click)="acumular('naruto', base)">Decrementar</button>
    `
})

export class ContadorComponent {

    public title: string = 'Contador App';
 public contador: number = 0;
 public base: number = 5;

sumar(){
  this.contador += 1;
}

restar(){
  this.contador -= 1;
}

acumular (operacion: string, valor: number){
  if(operacion == 'sumar'){
  this.contador += valor;
  }
  else{
    this.contador -= valor;
  }
}
}