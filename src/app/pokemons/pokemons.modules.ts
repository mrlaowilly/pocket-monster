import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonSearchComponent } from '../pokemons/search-pokemon/search-pokemon.component';

import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directives/border-card.directive';

import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';

import { PokemonRoutingModule } from './pokemons.routing.module';
import { LoaderComponent } from '../loader.component';
import { PokemonsService } from './pokemon.service';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
// import { AuthGuard } from '../auth-guard.service';
// import { AuthService } from '../auth.service';


@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    PokemonSearchComponent,
    FormPokemonComponent,
    LoaderComponent,
    PokemonTypeColorPipe,
    BorderCardDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [PokemonsService],
  //   providers: [PokemonsService, AuthGuard, AuthService],
  bootstrap: []
})
export class PokemonsModule { }
