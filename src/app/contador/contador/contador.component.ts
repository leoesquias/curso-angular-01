import { Component } from '@angular/core'
import { AppComponent } from 'src/app/app.component';
@Component({
    selector: 'app-contador',
     templateUrl:'./contador.component.html',

    })

export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero:number =8;
    public base:number =1


    public acumular(valor:number){
       this.numero+= valor;
    }

    public reset(){
      this.numero= 0;
   }
}





