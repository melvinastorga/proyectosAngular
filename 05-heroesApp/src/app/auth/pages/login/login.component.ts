import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  constructor( private router:Router, private authService: AuthService) { }

  login(){

    //Ir al backend, ver si el usuario existe o no
    // Tener un usuario, estará en un servicio.

    this.authService.login().
          subscribe( usuario => {
            if(usuario.email == 'john.due@gmail.com'){
              this.router.navigate(['./heroes/listado']);
            }
            console.log(usuario)
        });

    
  }

}
