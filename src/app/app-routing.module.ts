import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { PageNotFoundComponent } from './pokemons/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon/all', pathMatch: 'full'},
  { path: 'pokemon/all', component: PokemonsComponent},
  { path: '**', component: PageNotFoundComponent}
];

// const routes: Routes = [
//   { path: '', component: PokemonsComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
