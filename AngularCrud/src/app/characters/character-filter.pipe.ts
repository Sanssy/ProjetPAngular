import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character.model';

@Pipe({
  name: 'characterFilter',
  // pure: false
})
export class CharacterFilterPipe implements PipeTransform {
  // private _counter = 0;

  transform(characters: Character[], searchTerm: string): Character[] {
    // this._counter++;
    // console.log('Filter pipe executed count ' + this._counter);
    if (!characters || !searchTerm ) {
      return characters;
    }
    return characters.filter(character =>
      character.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
