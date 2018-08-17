import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  previewPhoto = false;
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
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  saveCharacter(chaForm: NgForm): void {
    console.log(chaForm.value);
  }

  datepickerConfig() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD-MM-YYYY',
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
      }
    );

  }

}
