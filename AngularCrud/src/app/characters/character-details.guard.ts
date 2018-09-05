import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsGuard implements CanActivate {

  constructor(private _characterService: CharacterService,
              private _router: Router,
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const characterExist = !!this._characterService.getOneCharacter(+route.paramMap.get('id'));

      if (characterExist) {
        return true;
      } else {
        this._router.navigate(['notfound']);
        return false;
      }

  }
}
