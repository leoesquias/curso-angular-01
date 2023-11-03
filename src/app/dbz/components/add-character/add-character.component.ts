import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  /* para que se instancie y pueda visualizare en otros componentes*/
  @Output()
 public  ue_onNewCharacter:EventEmitter<ICharacter> =  new EventEmitter();

 @Output()
 public onNuevoCharacter:EventEmitter<ICharacter>= new EventEmitter();

 public character:ICharacter = {
    nombre:'ABCs....',
    poder:10,
    procedencia:''
  };

  uf_emitCharacter():void{
    console.log(this.character);
    if(this.character.nombre.length ===0) return;
    this.ue_onNewCharacter.emit(this.character);
    this.character = {nombre:'',poder:0,procedencia:''};

  }
}
