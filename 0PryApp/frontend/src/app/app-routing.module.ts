import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoComponent } from "./contacto/contacto.component";
import { InicioComponent } from "./inicio/inicio.component";
import { PedidoComponent } from "./pedido/pedido.component";
import { RegistroComponent } from "./registro/registro.component";
//import { UsuarioComponent } from "./usuario/usuario.component";
import { LoginComponent } from "./login/login.component";

import { MenuComponent } from "./menu/menu.component";
import { PromocionesComponent } from "./promociones/promociones.component";

//array de rutas
const router: Routes = [
    { path: 'inicio', component: InicioComponent },
    //{ path: 'usuario', component: UsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    // { path: 'usuario', component: UsuarioComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: 'contacto', component: ContactoComponent },

    //Menu
    { path: 'Menu', component: MenuComponent },
    { path: 'Promociones', component: PromocionesComponent },

    { path: '**', component: MenuComponent } //en caso de error 404, no carga


];

//modulo de rutas, y agregar al app.module
@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule { }