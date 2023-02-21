import { DOCUMENT } from '@angular/common';
import { HostListener, Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pokemones } from '../interfaces/pokemons-interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-listado-pokemons',
  templateUrl: './listado-pokemons.component.html',
  styleUrls: ['./listado-pokemons.component.css'],
})
export class ListadoPokemonsComponent implements OnInit {
  @Input() search: string = '';
  pokemones: Pokemones[] = [];
  j = 10;
  cargando: boolean = false;

  showGoUpButton = false;
  private hideScrollHeight = 200;
  private showScrollHeight = 900;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.pokemonService.getPokemones(i).subscribe((resp) => {
        this.pokemones.push(resp);
      });
    }
  }
  onScroll(): void {
    this.cargando = true;
    setTimeout(() => {
      for (let i = 11; i <= 13; i++) {
        this.pokemonService.getPokemones(++this.j).subscribe((pokemons) => {
          this.pokemones.push(pokemons);
          this.cargando = false;
        });
      }
    }, 1000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    if (
      (yOffset ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (yOffset ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  scrollTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
