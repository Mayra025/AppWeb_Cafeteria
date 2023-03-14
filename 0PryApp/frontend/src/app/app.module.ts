import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CBodyDirective } from './c-body.directive';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent, CBodyDirective,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    PedidoComponent,
    ContactoComponent,
    MenuComponent,
    PromocionesComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, //para el modulo de rutas
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
