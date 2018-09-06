import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Character } from '../../models/character.model';
// import { getValueInRange } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/util/util';
import { CharacterService } from '../character.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Gender } from '../../enums/gender.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  @ViewChild('characterForm')
  public createCharacterForm: NgForm;
  previewPhoto = false;
  gender = Gender;
  cardTitle: string;

  character: Character;

  // dateOfBirth: Date = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  // gender = 'male';
  // isActive = true;
  // department = '3';

  departments: Department[] = [
    { id: 1, name: 'Help desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];

  constructor(
    private _characterService: CharacterService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.datepickerConfig();
  }

  ngOnInit() {
    // this.checkIsActive(); FIRST SOLUTION OF THE 22th LESSON
    this._route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.getCharacter(id);
    });
  }

  private getCharacter(id: number) {
    if (id === 0) {
      this.character = {
        id: null,
        name: null,
        gender: null,
        email: '',
        phoneNumber: '',
        contactPreference: '',
        dateOfBirth: null,
        // department: '-1', // this broke the required validation
        // department: null,
        department: 'select',
        isActive: null,
        photoPath: null,
        password: null,
        confirmPassword: null
      };
      this.cardTitle = 'Add a character';
      this.createCharacterForm.reset();
    } else {
      this.cardTitle = 'Edit a character';
      this._characterService
        .getOneCharacter(id)
        .subscribe(
          (character) => this.character = character,
          (error: any) => console.log(error)
        );
      // this.character = Object.assign({}, this._characterService.getOneCharacter(id));
    }
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  datepickerConfig() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: false,
        dateInputFormat: 'DD-MM-YYYY'
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
      }
    );
  }

  // FIRST SOLUTION OF THE 22th LESSON
  // checkIsActive() {
  //   if ( this.character.isActive === null) {
  //     return this.character.isActive = false;
  //   }
  // }

  saveCharacter(): void {
    if (this.character.id === null) {
      this._characterService.addCharacter(this.character).subscribe(
        (data: Character) => {
          console.log(data);
          this.createCharacterForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    } else {
      this._characterService.updateCharacter(this.character).subscribe(
        () => {
          this.createCharacterForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }
  }
  //   saveCharacter() {
  //     const newCharacter: Character = Object.assign({}, this.character);
  //     this._characterService.save(newCharacter);
  //     this.createCharacterForm.reset();
  //     // this.createCharacterForm.reset({
  //     //   name: 'Test',
  //     //   contactPreference: 'phoneNumber'
  //     // });
  //     this._router.navigate(['list']);
  // }

  // Before the 31st lesson :
  // saveCharacter(character: Character): void {
  //   console.log(character);
  // }
}
