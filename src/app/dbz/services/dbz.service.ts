import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';
import { UntypedFormBuilder } from '@angular/forms';

console.log(uuid())
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: ICharacter[]=[
    {id: uuid(),nombre: ' MPC-Krillin*', poder: 1000, procedencia: 'Bolivia'  },
    {id: uuid(),nombre: 'MPC-Goku',    poder: 9500, procedencia: 'Chile'   },
    {id: uuid(),nombre: 'MPC-Vegeta',    poder: 7500, procedencia: 'Peru' }
  ];

  uf_addCharacter(character:ICharacter):void{
    const ufs_newCharacter:ICharacter = {
      id:uuid(), ...character };

    this.characters.push(ufs_newCharacter);
    //console.log('MainPage')
    //console.log(character)
  }

  uf_onDeleteCharacter(index:number ):void{
  this.characters.splice(index,1);
  }
    uf_deleteCharacterById(id:string){
       this.characters = this.characters
       .filter(character => character.id !== id);
    }




}





















/*import { Injectable } from "@angular/core";
import { IPersonaje } from '../interfaces/dbz.iterfaces';

@Injectable()
export class DbzService{
    private _personajes: IPersonaje[]=[
        { nombre: 'Goku'  ,poder:15000, procedencia:'Japon'},
        { nombre: 'Vegeta',poder:75000,procedencia:'Taiwan'},

         ];
      get personajes(): IPersonaje[]{
        return [...this._personajes];
      }
    constructor(){

    }
    agregarPersonaje(personaje:IPersonaje){
        this._personajes.push(personaje);
    }


}*/
