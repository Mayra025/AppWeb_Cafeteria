import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EmpleadoComponent } from './empleado.component';
import { DataTablesModule } from 'angular-datatables';
import { EcrearComponent } from './crear/ecrear.component';

@NgModule({
    declarations: [
        EmpleadoComponent,
        EcrearComponent

    ],

    imports: [
        BrowserModule,
        FormsModule,
        EmpleadoRoutingModule, //para el modulo de rutas
        HttpClientModule,
        DataTablesModule //para tablas
    ],
    providers: [],
})
export class EmpleadoModule { }
