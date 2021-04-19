import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heroeService: HeroesService) { }

  heroes: Heroe[] = [];

  ngOnInit(): void {

    this.heroeService.getHeroes()
    .subscribe( heroes => this.heroes = heroes);
    // .subscribe (console.log);  Es lo mismo pero más corto
    // Con esto se supone que hacemos el llamado get http al server y nos debería traer todos los héroes en Json
  }


  
}
