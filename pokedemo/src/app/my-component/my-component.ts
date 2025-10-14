import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../service/pokéapi';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css'], 
  
})
export class MyComponent implements OnInit {
  id: string = '';
  name : string = '';
  go : boolean = false;
  pokes : Pokemon[] = [];
  selectedPokemon?: Pokemon;
  constructor(private pokemonService: PokemonService) {
    
  }
  ngOnInit() :void{
    this.getPokemonList();
    
  }
  getPokemonList() {
  this.pokemonService.getPokemonList().pipe(
    switchMap((data: any) => {
    
      const requests = data.results.map((result: any) => {
    const id = result.url.split('/').filter(Boolean).pop();
        
        return this.pokemonService.getPokemon(id);
      });
     
      return forkJoin(requests);
    })
  ).subscribe({
    next: (pokemonList:any) => {
      this.pokes = pokemonList.map((data: any) =>
        new Pokemon(
          data.id.toString(),
          data.name,
          data.imageUrl,
          data.types,
          data.abilities,
          data.stats
        )
      );
      console.log(this.pokes); 
    },
    error: (err) => console.error(err)
  });
}
  updateName() {
    const poke= this.pokes.find(p=>p.id===this.id);
    this.name=poke?.name || '';
}
  GetPokemon(name:string) {
    this.selectedPokemon = this.pokes.find(p=>p.id===this.id);
    console.log(this.selectedPokemon?.types);
    
  }}
