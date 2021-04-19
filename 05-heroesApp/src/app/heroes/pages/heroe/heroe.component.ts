import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100;
        border-radius: 5px;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { }

  id:string = '';
  heroe!: Heroe;

  ngOnInit(): void {
   
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroeService.getHeroeById(id))
    )
    .subscribe( heroe => this.heroe = heroe );
   
    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   this.id = id;
    // });

    // this.heroeService.getHeroeById(this.id)
    // .subscribe( heroe => this.heroe = heroe);
  }



}
