import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { PokemonIdComponent } from './pokemon-id/pokemon-id.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'pokemones', component: PokemonComponent },
      { path: ':id', component: PokemonIdComponent },
      { path: '404', component: ErrorPageComponent },
      { path: '**', redirectTo: 'pokemones', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
