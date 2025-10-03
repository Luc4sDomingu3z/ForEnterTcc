import { TestBed } from '@angular/core/testing';

import { Imagens } from './imagens';

describe('Imagens', () => {
  let service: Imagens;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Imagens);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
