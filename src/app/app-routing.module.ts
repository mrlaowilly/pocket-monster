import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon/all', pathMatch: 'full'},
  { path: 'pokemon/all', component: PokemonsComponent},
];

// const routes: Routes = [
//   { path: '', component: PokemonsComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
