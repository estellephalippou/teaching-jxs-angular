import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { MyComponent } from './my-component';
import { FilterPokemonPipePipe } from '../../../shared/pipes/filter-pokemon--pipe-pipe';
import { PokeApiService } from '../../../services/poke-api-service';
import { PokeShareInfo } from '../../../shared/poke-share-info';
import { PokeDetail, PokeServiceRes } from '../../../models/pokemon';

@Component({
  selector: 'app-pokedetail',
  template: '<div>pokedetail mock</div>',
  standalone: false
})
class PokedetailMock {
  @Input() detail?: PokeDetail;
}

class MockPokeApiService {
  getPokemons = jest.fn(() => of({
    results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
    ]
  } as PokeServiceRes));

  getPokemonsInfo = jest.fn((id: string) => of({
    id: Number(id),
    name: id === '5' ? 'charmeleon' : 'pikachu'
  } as Partial<PokeDetail> as PokeDetail));
}

class MockPokeShareInfo {
  setValue = jest.fn();
  getObservable() {
    return of();
  }
}

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [MyComponent, PokedetailMock, FilterPokemonPipePipe],
      providers: [
        provideRouter([]),
        { provide: PokeApiService, useClass: MockPokeApiService },
        { provide: PokeShareInfo, useClass: MockPokeShareInfo }
      ]
    })
    .overrideComponent(MyComponent, {
      remove: { providers: [PokeApiService, PokeShareInfo] },
      add: {
        providers: [
          { provide: PokeApiService, useClass: MockPokeApiService },
          { provide: PokeShareInfo, useClass: MockPokeShareInfo }
        ]
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemons on init', () => {
    expect(component.pokes.length).toBe(2);
    expect(component.pokes[0].name).toBe('bulbasaur');
  });

  it('should call getPokemonsInfo with id when id is set', () => {
    const api = component['pokeService'] as unknown as MockPokeApiService;
    const share = component['pokeShareInfoService'] as unknown as MockPokeShareInfo;
    component.id = '5';
    component.selectedPokeId = '2';

    component.go();
    jest.runAllTimers();

    expect(api.getPokemonsInfo).toHaveBeenCalledWith('5');
    expect(component.pokeDetail?.name).toBe('charmeleon');
    expect(share.setValue).toHaveBeenCalledWith('5');
  });

  it('should use selectedPokeId when id is empty', () => {
    const api = component['pokeService'] as unknown as MockPokeApiService;
    const share = component['pokeShareInfoService'] as unknown as MockPokeShareInfo;
    component.id = '';
    component.selectedPokeId = '7';

    component.go();
    jest.runAllTimers();

    expect(api.getPokemonsInfo).toHaveBeenCalledWith('7');
    expect(component.pokeDetail?.name).toBe('pikachu');
    expect(share.setValue).toHaveBeenCalledWith('7');
  });

  it('should have initial values', () => {
    expect(component.id).toBe('');
    expect(component.selectedPokeId).toBe('');
    expect(component.searchPokeName).toBe('');
    expect(component.pokes.length).toBe(2);
    expect(component.pokeDetail).toBeUndefined();
  });

  it('should update id when typing in input', () => {
    component.id = '25';
    fixture.detectChanges();
    expect(component.id).toBe('25');
  });

  it('should update selectedPokeId when selecting from dropdown', () => {
    component.selectedPokeId = '1';
    fixture.detectChanges();
    expect(component.selectedPokeId).toBe('1');
  });

  it('should update searchPokeName for filtering', () => {
    component.searchPokeName = 'pika';
    fixture.detectChanges();
    expect(component.searchPokeName).toBe('pika');
  });

  it('should render input field for search', () => {
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    expect(input).toBeTruthy();
    expect(input.getAttribute('placeholder')).toBe('Filtrer par nom');
  });

  it('should render select dropdown', () => {
    const compiled = fixture.nativeElement;
    const select = compiled.querySelector('select');
    expect(select).toBeTruthy();
  });

  it('should render go button', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Go!');
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
