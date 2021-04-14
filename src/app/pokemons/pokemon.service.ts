import { Injectable } from '@angular/core';
import { LISTPOKEMONS } from './donnees-pokemons/mock-pokemons';
import { Pokemon } from './donnees-pokemons/pokemon';

@Injectable()
export class PokemonsService{

    constructor(){}

    //Retourne tous les pokémons
    getPokemons(): Pokemon[]{
        return LISTPOKEMONS;
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number){
        let pokemons = this.getPokemons();
        for(let index = 0; index < pokemons.length; index++){
            if(id === pokemons[index].id){
                return pokemons[index];
            }
        }
        return 'false';
    }

    getPokemonsTypes(): string[]{
        return ['Plante',
                'Feu',
                'Eau',
                'Insecte',
                'Normal',
                'Electrik',
                'Poison',
                'Fée',
                'Vol',
                'Psy',
                'Combat'];
    }
}