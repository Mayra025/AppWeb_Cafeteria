import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoComponent } from "./contacto/contacto.component";
import { InicioComponent } from "./inicio/inicio.component";
import { PedidoComponent } from "./pedido/pedido.component";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { PromocionesComponent } from "./promociones/promociones.component";
import { DatatableComponent } from "./datatable/datatable.component";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { ClienteComponent } from "./cliente/cliente.component";
const empleadoModule = () => import('./empleado/empleado.module').then(x => x.EmpleadoModule);

//array de rutas
const router: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'table', component: DatatableComponent },
  // { path: '**', component:InicioComponent },

  //Menu
  { path: 'Menu', component: MenuComponent },
  { path: 'Promociones', component: PromocionesComponent },
  // { path: '**', component: InicioComponent },

  { path: 'empleado', component: EmpleadoComponent },
  { path: 'empleado', loadChildren: empleadoModule },

  { path: 'cliente', component: ClienteComponent },


];

//modulo de rutas, y agregar al app.module
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule { }