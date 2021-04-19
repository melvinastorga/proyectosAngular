import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
          width:100%;
          border-radius: 5px;
      }
    `
  ]
})
export class AgregarComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  
  constructor(  private heroeService: HeroesService,
                private activatedRouter: ActivatedRoute,
                private router: Router,
                private snackBar: MatSnackBar,
                private dialog: MatDialog) { }

  ngOnInit(): void {

    if(this.router.url.includes('editar')){

    this.activatedRouter.params
      .pipe(
        switchMap( ({id}) => this.heroeService.getHeroeById( id ))
      )
      .subscribe( heroe => this.heroe = heroe)
    }
  }

  guardar(){
    
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if( this.heroe.id) {
      
      this.heroeService.editarHeroe(this.heroe )
      .subscribe( resp => {
        this.router.navigate(['/heroes/editar', this.heroe.id]);
        this.mostrarSnackbar('Registro actualizado');
      });

    }else{
    
    this.heroeService.agregarHeroe(this.heroe )
      .subscribe( heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackbar('Registro Creado');
      });



    }
  }

  borrar(){

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if(result){
          this.heroeService.borrarHeroe(this.heroe ).
          subscribe( resp => {
            this.router.navigate(['/heroes/listado']);
            this.mostrarSnackbar('Registro Eliminado!');
        });
        }
      }
    )

 
}

mostrarSnackbar(mensaje: string){

  this.snackBar.open(mensaje, 'ok!', {
    duration: 2500,
    horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
  });

}


}
