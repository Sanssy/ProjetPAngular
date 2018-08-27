import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateCharacterComponent } from './create-character/create-character.component';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterCanDeactivateGuard implements CanDeactivate<CreateCharacterComponent> {
  canDeactivate(component: CreateCharacterComponent): boolean {
      if (component.createCharacterForm.dirty) {
        return confirm('Are you sure you want to discard your changes ?');
      }
    return true;
  }

}
