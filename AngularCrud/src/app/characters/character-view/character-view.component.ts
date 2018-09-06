import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/character.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  selectedCharacterId: number;
  @Input() perso: Character;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;
  // cardExpanded = true;
  // isHidden: false;

  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  // @Output() notifyExo: EventEmitter<Character> = new EventEmitter<Character>();

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _characterService: CharacterService,
  ) {}

  ngOnInit() {
    this.recuperationIdOfCharacter();
  }

  recuperationIdOfCharacter() {
    this.selectedCharacterId = +this._route.snapshot.paramMap.get('id');
  }

  viewCharacter() {
    this._router.navigate(['character', this.perso.id], {
      queryParams: {'searchTerm': this.searchTerm}
    });
  }

  editCharacter() {
    this._router.navigate(['edit', this.perso.id]);
  }

  deleteCharacter() {
    this._characterService.deteleCharacter(this.perso.id).subscribe(
      () => console.log(`Character with Id = ${this.perso.id} deleted`),
      (error) => console.log(error),
    );
    this.notifyDelete.emit(this.perso.id);
  }

  // getCharacterNameAndGender() {
  //   return this.perso.name  + ' ' + this.perso.gender;
  // }

  // handleClickExo() {
  //   this.notifyExo.emit(this.perso);
  // }

  // handleClick() {
  //   this.notify.emit(this.perso.name);
  // }

  // lesson 34 & 35 & 36

  // @Input() CharacterId: number;

  // private _characterId: number;

  // @Input()
  // set characterId(val: number) {
  //   console.log('Character Id changed from : ' +
  //       JSON.stringify(this._characterId ? this._characterId : 'NULL') + ' to ' + JSON.stringify(val));
  //   this._characterId = val;
  // }
  // get characterId(): number {
  //   return this._characterId;
  // }

  // private _perso: Character;

  // @Input()
  // set perso(val: Character) {
  //   console.log('Character changed from : ' +
  //       JSON.stringify(this._perso ? this._perso : 'NULL') + ' to ' + JSON.stringify(val));
  //   this._perso = val;
  // }
  // get perso(): Character {
  //   return this._perso;
  // }

  // console.log('Previous : ' + (this._perso ? this._perso.name : 'NULL'));
  // console.log('Curent : ' + val.name);

  // @Input() perso: Character;


  // 36th lesson setter property method (above)

  // 36th lesson ngOnChange method
  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const propName of Object.keys(changes)) {
  //     // console.log(propName);

  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue ? change.previousValue : 'NULL');
  //     const to = JSON.stringify(change.currentValue);

  //     console.log(propName + ' changed from ' + from + ' to ' + to);
  //   }
  // }

  // ngOnChange Method for the 34th lesson
  // ngOnChanges(changes: SimpleChanges) {
  //   // Display the entire object
  //   console.log(changes);

  //   // Display the name of the previous and the current object
  //   const previousCharacter = <Character>changes.perso.previousValue;
  //   const currentCharacter = <Character>changes.perso.currentValue;

  //   console.log('Previous : ' + (previousCharacter ? previousCharacter.name : 'NULL'));
  //   console.log('Current : ' + (currentCharacter.name));
  // }
}
