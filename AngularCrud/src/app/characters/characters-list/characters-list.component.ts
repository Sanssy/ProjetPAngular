import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../character.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  private _searchTerm: string;
  characters: Character[];
  filteredCharacters: Character[]; // to store the filtered list of characters

  // dataFromChildExo: Character;
  // dataFromChild: string;
  // characterToDisplay: Character;
  // private _arrayIndex = 1 ;

  constructor(
    private _characterService: CharacterService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.characters = this._characterService.getCharacter();
    // this.characterToDisplay = this.characters[0];
    this.filteredCharacters = this.characters;

    // snapshot approach
    // if (this._route.snapshot.queryParamMap.has('searchTerm')) {
    //   this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    // } else {
    //   this.filteredCharacters = this.characters;
    // }

    // observable approach
    this._route.queryParamMap.subscribe((queryParams) => {
      if (queryParams.has('searchTerm')) {
        this.searchTerm = queryParams.get('searchTerm');
      } else {
        this.filteredCharacters = this.characters;
      }
    });

    // console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.keys);
    // console.log(this._route.snapshot.paramMap.keys);
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredCharacters = this.filterCharacters(value);
  }

  filterCharacters(searchString: string) { // this method is using this parameter to filter the list of Character
    return this.characters.filter(character =>
      character.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  onClick (characterId: number) {
    this._router.navigate(['character', characterId], {
      queryParams: {'searchTerm': this.searchTerm, 'testParam': 'TestHomer'}
    });
  }

  changeCharacterName() {
    //                    pure change input value
    // this.characters[0].name = 'Bob';
    //                    pure change object reference change
    // const newCharacterArray: Character[] = Object.assign([], this.characters);
    // newCharacterArray[0].name = 'Bob';
    // this.characters = newCharacterArray;
    //                    Not pure change, only the value of the object change not his reference
    this.characters[0].name = 'Bob';
    // after we change the character name we want to update the filtered list of characters
    this.filteredCharacters = this.filterCharacters(this.searchTerm);
  }

  onMouseMove() {

  }


  // handleNotifyExo(eventData: Character) {
  //   this.dataFromChildExo = eventData;
  // }

  // handleNotify(eventData: string) {
  //   this.dataFromChild = eventData;
  // }

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
