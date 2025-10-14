
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  
  getPokemonList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=151`);
  }
  getPokemon(identifier: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${identifier}`).pipe(
    map((data: any) => ({
      id: data.id,
      name: data.name,
      imageUrl: data.sprites.front_default,
      types: data.types.map((t: any) => t.type.name),
      abilities: data.abilities.map((a: any) => a.ability.name),
      stats: data.stats.map((s: any) => ({
        name: s.stat.name,
        value: s.base_stat
      })),
      baseExperience: data.base_experience,
      cry: data.cries?.latest || ''
    }))
  );
  }
}
