import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Gender } from '../enums/gender.enum';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }
// 31 - exporting list from listCharacterComponent to characterService
  private listCharacter: Character[] = [
    {
      id: 1,
      name: 'Homer',
      gender: Gender.M,
      email: 'homer.simpson@gmail.com',
      phoneNumber: '555-441-7854',
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/25/1988'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/Homer1.jpg',
      password: '',
      confirmPassword: '',
  },
    {
      id: 2,
      name: 'Bart',
      gender: Gender.M,
      email: 'bart.simpson@gmail.com',
      phoneNumber: '555-441-7854',
      contactPreference: 'Email',
      dateOfBirth: new Date('05/14/2000'),
      department: '0',
      isActive: true,
      photoPath: 'assets/images/Bart1.jpg',
      password: '',
      confirmPassword: '',
  },
    {
      id: 3,
      name: 'Maggy',
      gender: Gender.F,
      email: 'maggy.simpson@gmail.com',
      phoneNumber: '555-441-7854',
      contactPreference: 'Phone',
      dateOfBirth: new Date('02/30/2017'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/Maggy2.png',
      password: '',
      confirmPassword: '',
  }
];

getCharacter(): Character[] {
  return this.listCharacter;
}

// 31 FIN

save(character: Character) {
  return this.listCharacter.push(character);
}

}
