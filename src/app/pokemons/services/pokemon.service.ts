import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon, Pokemones } from '../interfaces/pokemons-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPokemones(id: number): Observable<Pokemones> {
    return this.http.get<Pokemones>(`${this.url}/pokemon/${id}`);
  }
}
