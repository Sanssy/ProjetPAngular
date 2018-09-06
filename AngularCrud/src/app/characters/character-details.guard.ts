import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CharacterService } from './character.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsGuard implements CanActivate {

  constructor(private _characterService: CharacterService,
              private _router: Router,
  ) {

  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //     const characterExist = !!this._characterService.getOneCharacter(+route.paramMap.get('id'));

  //     if (characterExist) {
  //       return true;
  //     } else {
  //       this._router.navigate(['notfound']);
  //       return false;
  //     }

  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this._characterService.getOneCharacter(+route.paramMap.get('id')).pipe(
        map(character => {
          const characterExist = !!character;

          if (characterExist) {
            return true;
          } else {
            this._router.navigate(['notfound']);
            return false;
          }
        }),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
      );
  }
}
