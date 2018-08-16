import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { Gender } from '../../enums/gender.enum';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [
    {
      id: 1,
      name: 'Homer',
      gender: Gender.M,
      email: 'homer.simpson@gmail.com',
      phoneNumber: '555-441-7854',
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/25/1988'),
      department: 'US',
      isActive: true,
      photoPath: 'assets/images/Homer1.jpg',
  },
    {
      id: 2,
      name: 'Bart',
      gender: Gender.M,
      email: 'bart.simpson@gmail.com',
      phoneNumber: '555-441-7854',
      contactPreference: 'Email',
      dateOfBirth: new Date('05/14/2000'),
      department: 'US',
      isActive: true,
      photoPath: 'assets/images/Bart1.jpg',
  },
    {
      id: 3,
      name: 'Maggy',
      gender: Gender.F,
      email: 'maggy.simpson@gmail.com',
      phoneNumber: '555-441-7854',
      contactPreference: 'Phone',
      dateOfBirth: new Date('02/30/2017'),
      department: 'US',
      isActive: true,
      photoPath: 'assets/images/Maggy2.png',
  }
];

  constructor() { }

  ngOnInit() {
  }

}
