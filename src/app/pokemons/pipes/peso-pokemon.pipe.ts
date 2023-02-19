import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesoPokemon',
})
export class PesoPokemonPipe implements PipeTransform {
  transform(pokemon: Array<number>) {
    return (pokemon[0] = pokemon[0] / 10);
  }
}
