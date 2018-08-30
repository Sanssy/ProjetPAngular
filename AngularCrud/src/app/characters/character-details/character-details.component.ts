import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  private _id: number;
  character: Character;

  constructor(private _route: ActivatedRoute,
              private _characterService: CharacterService,
              private _router: Router,
  ) { }

  ngOnInit() {
    // this.angular2Method();
    // this.angular4AndAboveMethod(); // not working if we want to react to route parameter changes
    this.observableApproach();
  }

// 41st lesson

  angular2Method() {
    this._id = +this._route.snapshot.params['id'];
    this.character = this._characterService.getOneCharacter(this._id);
  }

  angular4AndAboveMethod() {
    this._id = +this._route.snapshot.paramMap.get('id');
    this.character = this._characterService.getOneCharacter(this._id);
  }

// 41 FIN

// 42nd lesson
// this method doesnt work: because the code that we have in the ngOnInit is only executed when this component is first
// loaded and initialized, after that every time we click this 'view next character'button the route parameter changes
// but this component is not reinitialized and hence the code that we have on the ngOnInit is not executed
  viewNextCharacter() {
    // this._id = this._id + 1;
    // this._router.navigate(['/character', this._id]);

    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this._router.navigate(['/character', this._id], {queryParamsHandling: 'preserve'});
  }

  observableApproach() {
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.character = this._characterService.getOneCharacter(this._id);
    });
  }




}
