import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.iterfaces';
import { DbzService } from '../services/dbz.service';
 
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
 
})
export class PersonajesComponent {

constructor(private dbzService: DbzService){
  this.dbzService.personajes
}
get personajes(){
  return this.dbzService.personajes;

  }

}
