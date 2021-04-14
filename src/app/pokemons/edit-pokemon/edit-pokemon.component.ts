import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { LISTPOKEMONS } from '../donnees-pokemons/mock-pokemons';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../pokemon.service';


@Component({
    selector: 'edit-pokemon',
    templateUrl: './edit-pokemon.component.html'
})

export class EditPokemonComponent implements OnInit{
    pokemon: any = null;

    constructor(private route: ActivatedRoute, 
                private router: Router,
                private pokemonsService: PokemonsService){
    }

    ngOnInit(){        
        let id = + this.route.snapshot.params.id;
        // Récuperer un pokemon grace à l'appel de la fonction dans le pokemon service
        this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }

}