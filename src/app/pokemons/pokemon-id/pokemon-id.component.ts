import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { habilidades } from '../interfaces/habilidades-interfaces';
import { Pokemones } from '../interfaces/pokemons-interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-id',
  templateUrl: './pokemon-id.component.html',
  styleUrls: ['./pokemon-id.component.css'],
})
export class PokemonIdComponent implements OnInit {
  pokemon!: Pokemones;
  habilidad!: habilidades;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonServices: PokemonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.pokemonServices.getPokemones(id)))
      .subscribe((pokemon) => (this.pokemon = pokemon));

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.pokemonServices.getPokemonPorAbilidad(id))
      )
      .subscribe((habilidad) => (this.habilidad = habilidad));
  }
}
