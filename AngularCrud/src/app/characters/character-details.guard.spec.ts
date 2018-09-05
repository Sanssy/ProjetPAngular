import { TestBed, async, inject } from '@angular/core/testing';

import { CharacterDetailsGuard } from './character-details.guard';

describe('CharacterDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterDetailsGuard]
    });
  });

  it('should ...', inject([CharacterDetailsGuard], (guard: CharacterDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
