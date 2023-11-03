import { IPersonaje } from './../interfaces/dbz.iterfaces';
import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { ICharacter } from '../interfaces/character.interface';


@Component({
  //selector: 'app-main-page',
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
  /*styleUrls: ['./main-page.component.css']*/
})

export class MainPageComponent {

  public characters: IPersonaje[]=[
    {nombre: ' MPC-Krillin*', poder: 1000, procedencia: 'Bolivia'  },
    { nombre: 'MPC-Goku',    poder: 9500, procedencia: 'Chile'   },
    { nombre: 'MPC-Vegeta',    poder: 7500, procedencia: 'Peru' }
  ];

  uf_onNewCharacter(character:ICharacter):void{
    console.log('MainPage')
    console.log(character)
  }

}
