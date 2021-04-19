import { Injectable, Pipe } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, Route, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
              private router: Router ) {

  }
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      // Si hay token, o un id de alguien logueado, tira un true y deja pasar, si no hay token no deja pasar.
      return this.authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if(!estaAutenticado){
            this.router.navigate(['./auth/login']);
          }
        })
      );

  //     if( this.authService.auth.id ){   //Si existe un auth con un id, o sea, si alguien se logueó
  //       return true;  
  //     }else{
  //   return false;
  // }
  }
  
canLoad(
  route: Route,
  segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verificaAutenticacion()
    .pipe(
      tap( estaAutenticado => {
        if(!estaAutenticado){
          this.router.navigate(['./auth/login']);
        }
      })
    );


//     if( this.authService.auth.id){   //Si existe un auth con un id, o sea, si alguien se logueó
//       return true;  
//     }else{
//   return false;
// }

  }

}
