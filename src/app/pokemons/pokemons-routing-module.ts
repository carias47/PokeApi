import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonIdComponent } from './pokemon-id/pokemon-id.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'pokemones', component: PokemonComponent },
      { path: ':id', component: PokemonIdComponent },
      { path: '**', redirectTo: 'pokemones' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
