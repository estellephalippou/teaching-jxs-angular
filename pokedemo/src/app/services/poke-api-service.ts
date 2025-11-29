import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetail, PokeServiceRes } from '../models/pokemon';

const url ='https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})


export class PokeApiService {


  constructor(private http: HttpClient) { }

    getPokemons() : Observable<PokeServiceRes> {
      return this.http.get<PokeServiceRes>(url + '?limit=883');
  }

   getPokemonsInfo(id: string) : Observable<PokeDetail> {
      return this.http.get<PokeDetail>(url + id + '/?limit=883');
  }
}
