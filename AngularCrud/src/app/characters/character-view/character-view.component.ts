import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  @Input() perso: Character;
  constructor() { }

  ngOnInit() {
  }

}
