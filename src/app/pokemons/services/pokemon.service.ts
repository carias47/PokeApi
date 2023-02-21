import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemones } from '../interfaces/pokemons-interfaces';
import { Observable } from 'rxjs';
import { Characteristic } from '../interfaces/characteristic-interface';
import { habilities } from '../interfaces/habilities-interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPokemones(id: number): Observable<Pokemones> {
    return this.http.get<Pokemones>(`${this.url}/pokemon/${id}`);
  }
  getCharacteristics(id: number): Observable<Characteristic> {
    return this.http.get<Characteristic>(`${this.url}/characteristic/${id}`);
  }
  getHabilidad(id: number): Observable<habilities> {
    return this.http.get<habilities>(`${this.url}/ability/${id}`);
  }
}
