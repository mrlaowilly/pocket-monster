import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {
    transform(type: string): string {
        let color: string;

        switch (type) {
            case 'Feu':
            color = 'red accent-3';
            break;           
            case 'Eau':           
            color = 'blue darken-2';
            break;
            case 'Plante':
            color = 'green accent-4';
            break;
            case 'Insecte':
            color = 'lime darken-1';
            break;
            case 'Normal':
            color = 'grey lighten-1';
            break;
            case 'Vol':
            color = 'blue-grey darken-1';
            break;
            case 'Poison':
            color = 'deep-purple';
            break;
            case 'Fée':
            color = 'pink lighten-3';
            break;
            case 'Psy':
            color = ' purple accent-4';
            break;
            case 'Electrik':
            color = 'yellow darken-1';
            break;
            case 'Combat':            
            color = 'brown darken-4';            
            break;            
            default:            
            color = 'grey';            
            break;  
            }

            return 'white-text chip ' + color;
    }
}