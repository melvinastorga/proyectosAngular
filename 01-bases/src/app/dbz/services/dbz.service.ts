import { Injectable } from "@angular/core";
import { Personaje } from '../Interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
        {
          nombre: 'Prueba',
          poder: 87000
        }
      ];

      get personajes(): Personaje[]{
          return [...this._personajes];
      }
    
    constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}