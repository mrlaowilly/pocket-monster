import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';

import { PokemonTypeColorPipe } from './pokemons/pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './pokemons/directives/border-card.directive';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';

import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './pokemons/edit-pokemon/form-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    PokemonsComponent,
    PokemonTypeColorPipe,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    // le FormsModule on l'import et non declarer car il existe au sein d'angular, il doit ce trover avant le AppRoutingModule
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
