import { Injectable } from '@angular/core';
import { LISTPOKEMONS } from './donnees-pokemons/mock-pokemons';
import { Pokemon } from './donnees-pokemons/pokemon';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PokemonsService{

    pokemon : any = null;
    // point d'entréer pour recuperer les données du web api
    private pokemonsUrl = "api/pokemons";

    constructor(private route: ActivatedRoute,
                private router: Router,
                private http: HttpClient){}

    private log(log: string){
        console.info(log);
    }

    private handleError<T>(operation= 'operation', result?: T){
        return (error: any) : Observable<T> =>{
            console.log(error);
            console.log(`${operation} failed : ${error.message}`);
            return of(result as T);
        }
    }

    //Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_=> this.log(`fetched pokemons`)),
            catchError(this.handleError<any>(`getPokemons`, []))
        );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon>{
        const url = `${this.pokemonsUrl}/${id}`; // syntaxe ES6

        return this.http.get<Pokemon>(url).pipe(
            tap(_=> this.log(`fetched pokemon id= ${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon>{
        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'})
        };
    
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_=> this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatedPokemon error'))
        );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon>{
        const url =`${this.pokemonsUrl}/${pokemon.id}`
        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'})
        };
        return this.http.delete<Pokemon>(url, httpOptions).pipe(
            tap(_=> this.log(`deleted pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        );
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

    goBack(pokemon: any = null){
        let link: any = [];
        if(pokemon){
            link= ['/pokemon', pokemon.id];
        } else {
            link= ['/pokemon/all'];
        }
        this.router.navigate(link);
    }
    
    searchPokemons(term: string): Observable<Pokemon[]> {
        if (!term.trim()) {
            // si le terme de recherche n'existe pas, on renvoie un tableau vide.
            return of([]);
        }

        return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`found pokemons matching "${term}"`)),
            catchError(this.handleError<Pokemon[]>('searchPokemons', []))
        );
    }

      /** Add pokemon */
    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };

        return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap((pokemon: Pokemon) =>
                this.log(`added pokemon with id=${pokemon.id}`)
            ),
            catchError(this.handleError<Pokemon>('addPokemon'))
        );
    }
}