import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';

describe('FilterPokemonPipePipe', () => {
  let pipe: FilterPokemonPipePipe;

  beforeEach(() => {
    pipe = new FilterPokemonPipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all pokemons when no search string is provided', () => {
    const pokemons = [
      { name: 'bulbasaur', id: 1 },
      { name: 'charmander', id: 4 },
      { name: 'squirtle', id: 7 }
    ];
    const result = pipe.transform(pokemons, 'name', '');
    expect(result).toEqual(pokemons);
    expect(result.length).toBe(3);
  });

  it('should filter pokemons by name (case insensitive)', () => {
    const pokemons = [
      { name: 'bulbasaur', id: 1 },
      { name: 'charmander', id: 4 },
      { name: 'squirtle', id: 7 }
    ];
    const result = pipe.transform(pokemons, 'name', 'char');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('charmander');
  });

  it('should filter pokemons case insensitively', () => {
    const pokemons = [
      { name: 'Bulbasaur', id: 1 },
      { name: 'Charmander', id: 4 }
    ];
    const result = pipe.transform(pokemons, 'name', 'BULBA');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Bulbasaur');
  });

  it('should return empty array when property is not provided', () => {
    const pokemons = [
      { name: 'bulbasaur', id: 1 }
    ];
    const result = pipe.transform(pokemons, undefined, 'test');
    expect(result).toEqual([]);
  });

  it('should return empty array when no pokemons match the search', () => {
    const pokemons = [
      { name: 'bulbasaur', id: 1 },
      { name: 'charmander', id: 4 }
    ];
    const result = pipe.transform(pokemons, 'name', 'pikachu');
    expect(result.length).toBe(0);
  });

  it('should return all pokemons when searchString is undefined', () => {
    const pokemons = [
      { name: 'bulbasaur', id: 1 },
      { name: 'charmander', id: 4 }
    ];
    const result = pipe.transform(pokemons, 'name', undefined);
    expect(result).toEqual(pokemons);
  });
});
