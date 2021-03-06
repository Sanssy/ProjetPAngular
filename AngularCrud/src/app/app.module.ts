import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { CharacterFilterPipe } from './characters/character-filter.pipe';
import { CharacterListResolverService } from './characters/character-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterDetailsGuard } from './characters/character-details.guard';
import { AccordionComponent } from './shared/accordion/accordion.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: CharactersListComponent,
    resolve: { characterList: CharacterListResolverService }
  },
  // {
  //   path: 'add',
  //   component: CreateCharacterComponent,
  //   canDeactivate: [CreateCharacterCanDeactivateGuard]
  //  },
  {
    path: 'edit/:id',
    component: CreateCharacterComponent,
    canDeactivate: [CreateCharacterCanDeactivateGuard]
   },
   {
    path: 'character/:id',
    component: CharacterDetailsComponent,
    canActivate: [CharacterDetailsGuard]
  },
   { path: '', redirectTo: '/list', pathMatch: 'full' },
   { path: 'notfound', component: PageNotFoundComponent },
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
    CharacterFilterPipe,
    PageNotFoundComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: false}),
  ],

  providers: [CharacterService, CreateCharacterCanDeactivateGuard, CharacterListResolverService, CharacterDetailsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
