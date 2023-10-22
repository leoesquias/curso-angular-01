import { Injectable } from "@angular/core";
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


}