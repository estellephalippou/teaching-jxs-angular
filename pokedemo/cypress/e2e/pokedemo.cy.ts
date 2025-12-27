describe('Pokedemo - parcours principal', () => {
  // On intercepte les appels réseau pour éviter de taper la vraie PokeAPI
  const listResponse = {
    count: 2,
    next: null,
    previous: null,
    results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }
    ],
  };

  const pikachuDetail = {
    abilities: [{ ability: { name: 'static', url: '' }, is_hidden: false, slot: 1 }],
    base_experience: 112,
    cries: { latest: '', legacy: '' },
    forms: [{ name: 'pikachu', url: '' }],
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
      back_default: 'back', back_female: null, back_shiny: 'back-shiny', back_shiny_female: null,
      front_default: 'https://img/pika.png', front_female: null, front_shiny: 'front-shiny', front_shiny_female: null,
      other: { 'official-artwork': { front_default: 'https://img/pika-art.png' } },
    },
    stats: [{ base_stat: 35, effort: 0, stat: { name: 'hp', url: '' } }],
    types: [{ slot: 1, type: { name: 'electric', url: '' } }],
    weight: 60,
  };

  const bulbasaurDetail = {
    abilities: [{ ability: { name: 'overgrow', url: '' }, is_hidden: false, slot: 1 }],
    base_experience: 64,
    cries: { latest: '', legacy: '' },
    forms: [{ name: 'bulbasaur', url: '' }],
    game_indices: [],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: '',
    moves: [],
    name: 'bulbasaur',
    order: 1,
    past_abilities: [],
    past_types: [],
    species: { name: 'bulbasaur', url: '' },
    sprites: {
      back_default: 'b-back', back_female: null, back_shiny: 'b-back-shiny', back_shiny_female: null,
      front_default: 'https://img/bulba.png', front_female: null, front_shiny: 'b-front-shiny', front_shiny_female: null,
      other: { 'official-artwork': { front_default: 'https://img/bulba-art.png' } },
    },
    stats: [{ base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } }],
    types: [{ slot: 1, type: { name: 'grass', url: '' } }, { slot: 2, type: { name: 'poison', url: '' } }],
    weight: 69,
  };

  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?limit=883', listResponse).as('getList');
    // Le composant assigne les ids à partir de l'index (1, 2, ...), donc on intercepte l'id 2
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/2/?limit=883', pikachuDetail).as('getPikachu');
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/1/?limit=883', bulbasaurDetail).as('getBulbasaur');
  });

  it('charge la page, liste les pokémons et affiche le détail', () => {
    cy.visit('/');

    cy.contains('pokedemo', { matchCase: false }).should('be.visible');

    cy.wait('@getList');
    cy.get('select option').should('have.length.at.least', 3); // placeholder + 2 pokemons
    cy.get('select').should('contain', 'bulbasaur').and('contain', 'pikachu');

    // Sélection par texte pour éviter tout mismatch de valeur
    cy.get('select').select('pikachu', { timeout: 10000 });
    cy.contains('button', 'Go!').click();

    cy.wait('@getPikachu');
    cy.contains('Le pokemon sélectionné est').should('contain', 'pikachu');
    cy.get('.main-artwork img').should('have.attr', 'src', 'https://img/pika-art.png');
    cy.contains('p', 'Types:').should('contain.text', 'electric', { timeout: 10000 });
  });

  it('filtre et affiche Bulbasaur avec ses types', () => {
    cy.visit('/');

    cy.wait('@getList');
    cy.get('select option').should('have.length.at.least', 3);

    // Filtre par nom
    cy.get('input[placeholder="Filtrer par nom"]').type('bulba');
    cy.get('select').should('contain', 'bulbasaur');

    // Sélection par texte
    cy.get('select').select('bulbasaur');
    cy.contains('button', 'Go!').click();

    cy.wait('@getBulbasaur');
    cy.contains('Le pokemon sélectionné est').should('contain', 'bulbasaur');
    cy.get('.main-artwork img').should('have.attr', 'src', 'https://img/bulba-art.png');
    cy.contains('p', 'Types:').should('contain.text', 'grass').and('contain.text', 'poison');
  });
});
