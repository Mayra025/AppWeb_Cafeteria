import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";


//array de rutas
const router:Routes=[
    {path:'inicio',component:InicioComponent},
    {path:'**',component:InicioComponent} //en caso de error 404, no carga

];

//modulo de rutas, y agregar al app.module
@NgModule({  
    imports:[RouterModule.forRoot(router)],
    exports:[RouterModule]
})

export class AppRoutingModule{}