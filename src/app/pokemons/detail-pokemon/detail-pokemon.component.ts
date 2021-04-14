import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../pokemon.service';


@Component ({
    selector : 'detail-pokemon',
    templateUrl : './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit{
    pokemon: any = null;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private pokemonsService: PokemonsService) {
    }

    ngOnInit() {
        let id = + this.route.snapshot.params.id;
        // Récuperer un pokemon grace à l'appel de la fonction dans le pokemon service
        this.pokemon = this.pokemonsService.getPokemon(id);
    }

    goBack():void{
        this.router.navigate(['pokemon/all']);
    }

    goEdit(pokemon: Pokemon){
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
      }
}
