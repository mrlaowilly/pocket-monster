import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';

import { PokemonTypeColorPipe } from './pokemons/pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './pokemons/directives/border-card.directive';


@NgModule({
  declarations: [
    AppComponent,
    DetailPokemonComponent,
    PokemonsComponent,
    PokemonTypeColorPipe,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
