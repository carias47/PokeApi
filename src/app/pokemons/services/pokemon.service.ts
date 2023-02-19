import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemones } from '../interfaces/pokemons-interfaces';
import { Observable } from 'rxjs';
import { habilidades } from '../interfaces/habilidades-interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPokemones(id: number): Observable<Pokemones> {
    return this.http.get<Pokemones>(`${this.url}/pokemon/${id}`);
  }
  getPokemonPorAbilidad(id: number): Observable<habilidades> {
    return this.http.get<habilidades>(
      `https://pokeapi.co/api/v2/ability/${id}`
    );
  }
}
