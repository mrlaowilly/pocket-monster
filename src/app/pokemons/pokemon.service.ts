import { Injectable } from '@angular/core';

import { LISTPOKEMONS } from './donnees-pokemons/mock-pokemons';
import { Pokemon } from './donnees-pokemons/pokemon';

@Injectable()
export class PokemonsService{

    constructor(){}

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