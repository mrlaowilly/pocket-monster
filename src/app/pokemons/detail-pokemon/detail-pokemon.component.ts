import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnees-pokemons/pokemon';
import { LISTPOKEMONS } from '../donnees-pokemons/mock-pokemons';

import { ActivatedRoute, Router } from '@angular/router';

@Component ({
    selector : 'detail-pokemon',
    templateUrl : './detail-pokemon.component.html',

})
export class DetailPokemonComponent implements OnInit{

    pokemons: Pokemon[];
    pokemon: any = null;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.pokemons = [];
    }

    ngOnInit() {

        this.pokemons = LISTPOKEMONS;

        let id = + this.route.snapshot.params.id;
        for(let i = 0; i < this.pokemons.length; i++){
            if(this.pokemons[i].id == id){
                this.pokemon = this.pokemons[i];
            }
        }
    }

}
