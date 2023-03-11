import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CBodyDirective } from './c-body.directive';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
//import { UsuarioComponent } from './usuario/usuario.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { PromocionesComponent } from './promociones/promociones.component';



@NgModule({
  declarations: [
    AppComponent,
   // InicioComponent,
    LoginComponent,
    RegistroComponent,
    
    CBodyDirective,
   // UsuarioComponent,
    PedidoComponent,
    ContactoComponent,
  
    MenuComponent,
    PromocionesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //para el modulo de rutas
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
