import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Character } from '../models/character.model';
import { Observable} from 'rxjs';
import { CharacterService } from './character.service';
import { map, catchError} from 'rxjs/operator';
import { ResolvedCharacterList } from './resolved-characterlist.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterListResolverService implements Resolve<ResolvedCharacterList> {

  constructor(private _characterService: CharacterService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedCharacterList> {
    return this._characterService.getCharacter()
      .pipe(
        map((characterList) => new ResolvedCharacterList(characterList)),
        catchError((err: any) => Observable.of(new ResolvedCharacterList(null, err)))
      );
  }

}
