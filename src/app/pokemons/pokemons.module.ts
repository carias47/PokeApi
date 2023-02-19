import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPokemonsComponent } from './listado-pokemons/listado-pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonRoutingModule } from './pokemons-routing-module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BuscarPipe } from './pipes/buscar.pipe';
import { PokemonIdComponent } from './pokemon-id/pokemon-id.component';
import { PesoPokemonPipe } from './pipes/peso-pokemon.pipe';

@NgModule({
  declarations: [
    PokemonComponent,
    ListadoPokemonsComponent,
    BuscarPipe,
    PokemonIdComponent,
    PesoPokemonPipe,
  ],
  imports: [CommonModule, PokemonRoutingModule, InfiniteScrollModule],
})
export class PokemonsModule {}
