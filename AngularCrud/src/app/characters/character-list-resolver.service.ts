import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Character } from '../models/character.model';
import { Observable } from 'rxjs';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterListResolverService implements Resolve<Character[]> {

  constructor(private _characterService: CharacterService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character[]> {
    return this._characterService.getCharacter();
  }

}
