import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MainPageComponent} from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

//import { PersonajesComponent } from './personajes/personajes.component';
//import { AgregarComponent } from './agregar/agregar.component';
//import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  //  PersonajesComponent,
   // AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  /*providers:[
    DbzService
  ]
  */
})
export class DbzModule { }
