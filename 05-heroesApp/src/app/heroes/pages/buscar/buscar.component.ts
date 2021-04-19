import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


termino:string = '';

heroes: Heroe[] = [];

heroeSeleccionado: Heroe | undefined;



  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias( this.termino.trim()) // Para quitar los espacios superman espacio
    .subscribe( heroes => this.heroes = heroes);
  }

  opcionSeleccionada( event:MatAutocompleteSelectedEvent){
    console.log(event.option.value)
    if(event.option.value == '' || event.option.value == undefined){
      console.log("No hay valor!");
      this.heroeSeleccionado = undefined;
      this.termino = '';
      console.log(this.heroes, this.termino);
    }else{
      const heroe: Heroe = event.option.value;
      console.log(heroe, 'prueba');
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById( heroe.id!)
      .subscribe( heroe => this.heroeSeleccionado = heroe);
    }
  }

}
