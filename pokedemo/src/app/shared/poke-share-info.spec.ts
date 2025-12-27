import { TestBed } from '@angular/core/testing';

import { PokeShareInfo } from './poke-share-info';

describe('PokeShareInfo', () => {
  let service: PokeShareInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeShareInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable', () => {
    const observable = service.getObservable();
    expect(observable).toBeTruthy();
    expect(observable.subscribe).toBeDefined();
  });

  it('should emit value when setValue is called', (done) => {
    const testValue = 'test-pokemon-id';

    service.getObservable().subscribe((value) => {
      expect(value).toBe(testValue);
      done();
    });

    service.setValue(testValue);
  });

  it('should emit multiple values', (done) => {
    const values: string[] = [];
    const expectedValues = ['1', '25', '150'];

    service.getObservable().subscribe((value) => {
      values.push(value);
      if (values.length === 3) {
        expect(values).toEqual(expectedValues);
        done();
      }
    });

    service.setValue('1');
    service.setValue('25');
    service.setValue('150');
  });
});
