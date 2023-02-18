import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { MenuComponent } from "./menu/menu.component";





//array de rutas
const router:Routes=[
//Menu
{path:'Menu',component: MenuComponent},
{path:'**',component: MenuComponent} //en caso de error 404, no carga


];

//modulo de rutas, y agregar al app.module
@NgModule({  
    imports:[RouterModule.forRoot(router)],
    exports:[RouterModule]
})

export class AppRoutingModule{}