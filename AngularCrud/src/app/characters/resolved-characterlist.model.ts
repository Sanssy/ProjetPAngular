import { Character } from '../models/character.model';

export class ResolvedCharacterList {

  constructor(
    public characterList: Character[],
    public error: any = null ) {

  }

}
