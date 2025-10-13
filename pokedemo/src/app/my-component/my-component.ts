import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../service/pokéapi';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
  
})
export class MyComponent implements OnInit {
  id: string = '';
  name : string = '';
  go : boolean = false;
  pokes : Pokemon[] = [];
  pokemon: any;


  constructor(private pokemonService: PokemonService) {
    
  }
  ngOnInit() :void{
    this.getPokemonList();
  }
  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe({
     next: (data) => {
      this.pokes = data.results.map((result: any, index: number) =>
        new Pokemon((index + 1).toString(), result.name)
      );
    },
      error: (err) => console.error(err)
    });
  }
  updateName() {
    const poke= this.pokes.find(p=>p.id===this.id);
    this.name=poke?.name || '';
}
  GetPokemon(name:string) {
    this.go = true;
    this.pokemonService.getPokemon(name).subscribe({
      next: (data) => {
        this.pokemon = data;
        console.log(this.pokemon);
      },
      error: (err) => console.error(err)
    });
  }}
