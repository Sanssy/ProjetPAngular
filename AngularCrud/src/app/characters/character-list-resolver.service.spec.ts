import { TestBed, inject } from '@angular/core/testing';

import { CharacterListResolverService } from './character-list-resolver.service';

describe('CharacterListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterListResolverService]
    });
  });

  it('should be created', inject([CharacterListResolverService], (service: CharacterListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
