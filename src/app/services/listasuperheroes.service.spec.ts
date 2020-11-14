import { TestBed } from '@angular/core/testing';

import { ListasuperheroesService } from './listasuperheroes.service';

describe('ListasuperheroesService', () => {
  let service: ListasuperheroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasuperheroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
