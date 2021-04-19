import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower   :string = 'melvin';
 nombreUpper   :string = 'MELVIN';
 nombreCompleto:string = 'MeLvIn aStOrGa'

 fecha: Date = new Date(); // el día de hoy
}
