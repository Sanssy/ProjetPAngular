import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character.model';

@Pipe({
  name: 'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {

  transform(characters: Character[], searchTerm: string): Character[] {
    if (!characters || !searchTerm ) {
      return characters;
    }
    return characters.filter(character =>
      character.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
