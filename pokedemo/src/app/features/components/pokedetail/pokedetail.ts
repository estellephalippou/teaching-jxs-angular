import { Component, Input, OnInit } from '@angular/core';
import { PokeDetail } from '../../../models/pokemon';
import { PokeShareInfo } from '../../../shared/poke-share-info';

@Component({
  selector: 'app-pokedetail',
  standalone: false,
  templateUrl: './pokedetail.html',
  styleUrls: ['./pokedetail.css'],
  providers: [],
})
export class Pokedetail implements OnInit {
  @Input('detail')
  detail?: PokeDetail | undefined;

  constructor(private pokeShareInfoService: PokeShareInfo) {
    this.pokeShareInfoService.getObservable().subscribe((e) => {
      console.log('e: ' + e);
    });
  }

  ngOnInit(): void {}
}
