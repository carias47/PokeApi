import { Pipe, PipeTransform } from '@angular/core';
import { Pokemones } from '../interfaces/pokemons-interfaces';

@Pipe({
  name: 'buscar',
})
export class BuscarPipe implements PipeTransform {
  transform(pokemon: Pokemones[], search: string = '') {
    if (search.length === 0) return pokemon;

    const filterPokemons = pokemon.filter((poke) => poke.name.includes(search));
    return filterPokemons;
  }
}
