import { TestBed } from '@angular/core/testing';

import { PokéAPI } from './pokéapi';

describe('PokéAPI', () => {
  let service: PokéAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokéAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
