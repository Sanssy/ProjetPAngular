import { TestBed, async, inject } from '@angular/core/testing';

import { CreateCharacterCanDeactivateGuard } from './create-character-can-deactivate.guard';

describe('CreateCharacterCanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCharacterCanDeactivateGuard]
    });
  });

  it('should ...', inject([CreateCharacterCanDeactivateGuard], (guard: CreateCharacterCanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
