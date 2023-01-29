import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPokemonsComponent } from './listado-pokemons/listado-pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonRoutingModule } from './pokemons-routing-module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [PokemonComponent, ListadoPokemonsComponent],
  imports: [CommonModule, PokemonRoutingModule, InfiniteScrollModule],
})
export class PokemonsModule {}
