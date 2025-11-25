import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PokeDetail, Pokemon } from '../pokemon';
import { PokeApiService } from '../poke-api-service';
import { PokeShareInfo } from '../poke-share-info';

@Component({
  standalone: false,
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css'],
  providers: [PokeApiService, PokeShareInfo],
})

export class MyComponent implements OnInit {
  id: string = '';
  selectedPokeId: string | '' = '';
  searchPokeName: string = '';
  pokes: Pokemon[] = [];
  pokeDetail: PokeDetail | undefined;

  constructor(private pokeService: PokeApiService,
              private pokeShareInfoService: PokeShareInfo,
              private cdr: ChangeDetectorRef) {
    }

  ngOnInit() {
    this.pokeService.getPokemons().subscribe((data) => {
      console.log(data.results);
      const res = data.results as any[];
      data.results.forEach((e,index) => {
        this.pokes.push(new Pokemon((index+1).toString(), e.name, e.url));
      });
      this.cdr.detectChanges();
  });
}

  go() {
    const idToFetch = (this.id && this.id.toString().trim() !== '') ? this.id.toString().trim() : this.selectedPokeId;
    if (idToFetch !== '') {
      this.pokeService.getPokemonsInfo(idToFetch).subscribe(data => {
        this.pokeDetail = data;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.pokeShareInfoService.setValue(idToFetch);
        }, 0);
      });
    }
  }
}
