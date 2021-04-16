import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject, of } from 'rxjs';
import { EMPTY } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];
  isNotFound!: boolean;
  term!: string;
  pokemons$!: Observable<Pokemon[]>;
  private result = EMPTY.pipe(isEmpty());

  constructor(private router: Router,
              private pokemonsService: PokemonsService,
              private titleService: Title
    ) {
    this.pokemons = [];
   }

  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
    this.pokemons$.subscribe((pokemons) => this.setPokemons(pokemons));
    this.getPokemons();
  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  getPokemons(): void {
    this.titleService.setTitle('Liste des pokémons');
    this.pokemonsService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons));
  }

  getItems(): any {
    return this.pokemons;
  }

  setPokemons(pokemons: Pokemon[]) {
    if (pokemons.length > 0) {
      this.pokemons = pokemons;
    } else if (!this.term.trim()) {
      this.isNotFound = false;
      this.getPokemons();
    } else {
      this.isNotFound = true;
    }
  }
}
