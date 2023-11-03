import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()  //le decimos que puede recibir una properties
  public characterList: ICharacter[]=[
        {nombre:'Trunks', poder:10, procedencia:'CBBA'},
        //{nombre:'L-Goku',    poder:9500, procedencia:'Chile'},
        //{nombre:'L-Vegeta',  poder:7500, procedencia:'Chile'}
      ];

      @Output()
      public ue_onDelete: EventEmitter <number>= new EventEmitter();
     // uf_onDeleteCharacter = Index value : number
      uf_onDeleteCharacter(index:number ): void{
        //TODO Emitir el Id del personaje
        this.ue_onDelete.emit(index);
      }
}
