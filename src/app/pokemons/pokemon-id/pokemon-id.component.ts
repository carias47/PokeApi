import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Characteristic } from '../interfaces/characteristic-interface';
import { habilities } from '../interfaces/habilities-interface';
import { Pokemones } from '../interfaces/pokemons-interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-id',
  templateUrl: './pokemon-id.component.html',
  styleUrls: ['./pokemon-id.component.css'],
})
export class PokemonIdComponent implements OnInit {
  pokemon: Pokemones;
  characteristic: Characteristic;
  ability: habilities;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonServices: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
    this.getCharacteristics();
    this.getAbility();
  }
  getPokemon() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.pokemonServices.getPokemones(id)))
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }
  getCharacteristics() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.pokemonServices.getCharacteristics(id)))
      .subscribe((characteristic) => (this.characteristic = characteristic));
  }
  getAbility() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.pokemonServices.getHabilidad(id)))
      .subscribe((ability) => (this.ability = ability));
  }
}
