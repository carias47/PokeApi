import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  public search: string = '';
  constructor() {}

  onSearchPokemon(search: string) {
    this.search = search;
  }
}
