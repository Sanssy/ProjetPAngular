import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: Character[];
  // characterToDisplay: Character;
  // private _arrayIndex = 1 ;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this._characterService.getCharacter();
    // this.characterToDisplay = this.characters[0];
  }

  // nextCharacter(): void {
  //   if (this._arrayIndex <= this.characters.length - 1) {
  //     this.characterToDisplay = this.characters[this._arrayIndex];
  //     this._arrayIndex++;
  //   } else {
  //     this.characterToDisplay = this.characters[0];
  //     this._arrayIndex = 1;
  //   }
  // }

}
