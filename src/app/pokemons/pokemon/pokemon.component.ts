import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  public search: string = '';
  constructor() {}

  // getPokemones() {
  //   // let pokemonData;
  //   // for (let i = 1; i <= 12; i++) {
  //   //   this.pokemonService.getPokemones(i).subscribe((resp) => {
  //   //     pokemonData = {
  //   //       name: resp.name,
  //   //       position: resp.id,
  //   //       imagen: resp.sprites.front_default,
  //   //     };
  //   //     this.pokemones.push(pokemonData);
  //   //   });
  //   // }
  //   // console.log(this.pokemones);
  // }

  onSearchPokemon(search: string) {
    this.search = search;
  }
}
