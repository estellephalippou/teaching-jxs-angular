import { Pokemon, Convert, PokeDetail } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance with id, name, url', () => {
    const p = new Pokemon('25', 'pikachu', 'https://pokeapi.co/api/v2/pokemon/25/');
    expect(p.id).toBe('25');
    expect(p.name).toBe('pikachu');
    expect(p.url).toContain('/25/');
  });

  it('should throw when JSON is invalid for PokeDetail', () => {
    const badJson = JSON.stringify({ foo: 'bar' });
    expect(() => Convert.toPokeDetail(badJson)).toThrow();
  });

  it('should convert PokeDetail to JSON and back', () => {
    const detail: PokeDetail = {
      abilities: [{ ability: { name: 'static', url: '' }, is_hidden: false, slot: 1 }],
      base_experience: 112,
      cries: { latest: '', legacy: '' },
      forms: [{ name: 'pikachu', url: '' }],
      game_indices: [{ game_index: 1, version: { name: 'red', url: '' } }],
      height: 4,
      held_items: [],
      id: 25,
      is_default: true,
      location_area_encounters: '',
      moves: [{ move: { name: 'tackle', url: '' }, version_group_details: [{ level_learned_at: 1, move_learn_method: { name: 'level-up', url: '' }, order: 0, version_group: { name: 'red', url: '' } }] }],
      name: 'pikachu',
      order: 25,
      past_abilities: [],
      past_types: [],
      species: { name: 'pikachu', url: '' },
      sprites: {
        back_default: '',
        back_female: null,
        back_shiny: '',
        back_shiny_female: null,
        front_default: '',
        front_female: null,
        front_shiny: '',
        front_shiny_female: null
      },
      stats: [{ base_stat: 35, effort: 0, stat: { name: 'hp', url: '' } }],
      types: [{ slot: 1, type: { name: 'electric', url: '' } }],
      weight: 60,
    };

    const json = Convert.pokeDetailToJson(detail);
    const parsed = Convert.toPokeDetail(json);

    expect(parsed.name).toBe('pikachu');
    expect(parsed.abilities[0].ability?.name).toBe('static');
    expect(parsed.types[0].type.name).toBe('electric');
  });

  it('should throw when required numeric fields are wrong type', () => {
    const bad: any = {
      abilities: [],
      base_experience: 'bad', // string instead of number
      cries: { latest: '', legacy: '' },
      forms: [],
      game_indices: [],
      height: 4,
      held_items: [],
      id: 25,
      is_default: true,
      location_area_encounters: '',
      moves: [],
      name: 'pikachu',
      order: 25,
      past_abilities: [],
      past_types: [],
      species: { name: 'pikachu', url: '' },
      sprites: {
        back_default: '', back_female: null, back_shiny: '', back_shiny_female: null,
        front_default: '', front_female: null, front_shiny: '', front_shiny_female: null
      },
      stats: [],
      types: [],
      weight: 60
    };
    expect(() => Convert.pokeDetailToJson(bad as any)).toThrow();
  });

  it('should throw when parsing invalid JSON structure', () => {
    const invalidJson = '{"name":42}';
    expect(() => Convert.toPokeDetail(invalidJson)).toThrow();
  });
});
