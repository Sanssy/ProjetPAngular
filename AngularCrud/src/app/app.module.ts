import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharacterViewComponent } from './characters/character-view/character-view.component';
import { CreateCharacterComponent } from './characters/create-character/create-character.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { CharacterService } from './characters/character.service';
import { CreateCharacterCanDeactivateGuard } from './characters/create-character-can-deactivate.guard';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';

const appRoutes: Routes = [
  { path: 'list', component: CharactersListComponent },
  {
    path: 'add',
    component: CreateCharacterComponent,
    canDeactivate: [CreateCharacterCanDeactivateGuard]
   },
   { path: 'character/:id', component: CharacterDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterViewComponent,
    CreateCharacterComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    CharacterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
  ],

  providers: [CharacterService, CreateCharacterCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
