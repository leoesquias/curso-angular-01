import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//import { MainPageComponent } from './dbz/pages/main-page.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent,
        ],
    exports:[
        ListadoComponent,
        HeroeComponent,
        CommonModule
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}
