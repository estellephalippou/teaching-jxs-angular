import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokedetail } from './pokedetail';
import { PokeDetail } from '../../../models/pokemon';
import { PokeShareInfo } from '../../../shared/poke-share-info';

describe('Pokedetail', () => {
  let component: Pokedetail;
  let fixture: ComponentFixture<Pokedetail>;
  let pokeShareInfoService: PokeShareInfo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokedetail],
      providers: [PokeShareInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokedetail);
    component = fixture.componentInstance;
    pokeShareInfoService = TestBed.inject(PokeShareInfo);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept detail input', () => {
    const mockDetail: Partial<PokeDetail> = {
      id: 25,
      name: 'pikachu',
      height: 4,
      weight: 60,
      base_experience: 112,
      abilities: [
        { ability: { name: 'static', url: '' }, is_hidden: false, slot: 1 }
      ] as any,
      types: [
        { slot: 1, type: { name: 'electric', url: '' } }
      ] as any,
      moves: [] as any,
      stats: [
        { base_stat: 35, effort: 0, stat: { name: 'hp', url: '' } }
      ] as any,
      species: { name: 'pikachu', url: '' } as any,
      sprites: {
        front_default: 'url1',
        back_default: 'url2',
        front_shiny: 'url3',
        back_shiny: 'url4',
        other: {
          'official-artwork': {
            front_default: 'url5'
          }
        }
      } as any
    };
    component.detail = mockDetail as PokeDetail;
    fixture.detectChanges();
    expect(component.detail).toBeTruthy();
    expect(component.detail.name).toBe('pikachu');
  });

  it('should subscribe to PokeShareInfo observable on init', () => {
    const spy = jest.spyOn(console, 'log');
    pokeShareInfoService.setValue('25');
    expect(spy).toHaveBeenCalledWith('e: 25');
    spy.mockRestore();
  });

  it('should have undefined detail by default', () => {
    const newComponent = new Pokedetail(pokeShareInfoService);
    expect(newComponent.detail).toBeUndefined();
  });
});
