import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.iterfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  {
    
  @Input() nuevo: IPersonaje = {
    nombre: '',
    poder:0,
    procedencia:''
  }
   constructor(private dbzService: DbzService){

    }
 // @Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter();
 
  agregar() {
    if(this.nuevo.nombre.trim().length===0){return;}

    console.log('-->'+this.nuevo.nombre);
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo)
    this.nuevo={
      nombre:'',
      poder:0,
      procedencia:''
    }

  }
}
