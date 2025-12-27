import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PokeApiService } from '../services/poke-api-service';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
