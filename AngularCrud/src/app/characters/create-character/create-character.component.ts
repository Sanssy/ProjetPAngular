import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Character } from '../../models/character.model';
// import { getValueInRange } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/util/util';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';
import { Gender } from '../../enums/gender.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  @ViewChild('characterForm') public createCharacterForm: NgForm;
  previewPhoto = false;
  gender = Gender;

  character: Character = {
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
    confirmPassword: null,
  };

  // dateOfBirth: Date = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  // gender = 'male';
  // isActive = true;
  // department = '3';

  departments: Department[] = [
    {id: 1, name: 'Help desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},
  ];

  constructor(private _characterService: CharacterService,
              private _router: Router,
  ) {
    this.datepickerConfig();
     }

  ngOnInit() {
    // this.checkIsActive(); FIRST SOLUTION OF THE 22th LESSON
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }



  datepickerConfig() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: false,
        dateInputFormat: 'DD-MM-YYYY',
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

  saveCharacter() {
    this._characterService.save(this.character);
    this.createCharacterForm.reset();
    // this.createCharacterForm.reset({
    //   name: 'Test',
    //   contactPreference: 'phoneNumber'
    // });
    this._router.navigate(['list']);
}

// Before the 31st lesson :
  // saveCharacter(character: Character): void {
  //   console.log(character);
  // }


}
