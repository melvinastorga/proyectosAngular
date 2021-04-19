import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { trigger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor( private http: HttpClient) { }

  // Se desestructura, para que no sufra cambios accidentales al ir a otras clases.
  get auth(): Auth{
    return {...this._auth!};
  }

  verificaAutenticacion(): Observable<boolean>{
    if (!localStorage.getItem('token')){
      return of(false); // Para convertirlo a un Observable
     // return false;
    }

    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
    .pipe( // map, para transformar las cosas
      map( auth => {
        this._auth = auth;
        return true;
      })
    )

  }

  login() {
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
    .pipe(
      // se usa el tap para hacer un uso de lo que retorna el subscribe antes de usarlo en 
      // la clase donde se ocupe. Ya que el subscribe solos e puede usar una vez.
      // Antes del subscribe se ejecuta este tap.
      tap( resp => {
        this._auth = resp;
        localStorage.setItem( 'token', resp.id);
      })
    );
  }

  logout() {
    this._auth = undefined;
  }

}
