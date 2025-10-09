import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
  
})
export class MyComponent {
  id: string = '';
  name : string = '';
  go : boolean = false;
  pokes : Pokemon[] = [];

  constructor() {
    this.pokes.push(new Pokemon('1', 'Pikachu'));
    this.pokes.push(new Pokemon('2', 'Bulbusaur'));
    this.pokes.push(new Pokemon('3', 'Ivysaur'));
    this.pokes.push(new Pokemon('4', 'Venusaur'));
    this.pokes.push(new Pokemon('5', 'Charamander'));
  }
  updateName() {
    const poke= this.pokes.find(p=>p.id===this.id);
    this.name=poke?.name || '';
}
  GetPokemon() {
    this.go = true;
    console.log(this.id);
  }}
