import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.iterfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  /*styleUrls: ['./main-page.component.css']*/
})

export class MainPageComponent {
  
  nuevo: IPersonaje={
    nombre: 'Maestro Roshi',
    poder: 1000,
    procedencia: 'Bolivia'
  }
  
  constructor()  {
  
  }

}
