import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Character } from '../../models/character.model';
import { getValueInRange } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  previewPhoto = false;

  character: Character = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: '',
    contactPreference: '',
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
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

  constructor() {
    this.datepickerConfig();
     }

  ngOnInit() {
    // this.checkIsActive(); FIRST SOLUTION OF THE 22th LESSON
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  saveCharacter(character: Character): void {
    console.log(character);
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


}
