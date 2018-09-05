import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Gender } from '../enums/gender.enum';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _httpClient: HttpClient ) {}

  private _handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error: ', errorResponse.error.message);
    } else {
      console.log('Server Side Error: ', errorResponse);
    }
    return throwError(new Error('There is a problem with the service. We are notified & working on it. Please try again later.'));
  }

  // 31 - exporting list from listCharacterComponent to characterService
  // tslint:disable-next-line:member-ordering
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
      confirmPassword: ''
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
      confirmPassword: ''
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
      confirmPassword: ''
    }
  ];

  // until lesson 53
  // getCharacter(): Observable<Character[]> {
  //   return this.listCharacter;
  // }

  getCharacter(): Observable<Character[]> {
    // return of(this.listCharacter).pipe(delay(2000));
    return this._httpClient.get<Character[]>('http://localhost:3000/characters1')
            .pipe(catchError(this._handleError));
  }

  // 31 FIN

  getOneCharacter(id: number): Character {
    return this.listCharacter.find(e => e.id === id);
  }

  save(character: Character) {
    if (character.id === null) {
      const maxid = this.listCharacter.reduce(function(e1, e2) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      character.id = maxid + 1;
      this.listCharacter.push(character);
    } else {
      const foundIndex = this.listCharacter.findIndex(
        e => e.id === character.id
      );
      this.listCharacter[foundIndex] = character;
    }
  }

  deteleCharacter(id: number) {
    const idToDelete = this.listCharacter.findIndex(e => e.id === id);
    if (idToDelete !== -1) {
      this.listCharacter.splice(idToDelete, 1);
    }
  }
}
