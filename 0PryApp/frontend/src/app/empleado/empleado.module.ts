import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado.component';
//import { DataTablesModule } from 'angular-datatables';

@NgModule({
    declarations: [

    ],

    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule, //para el modulo 
        EmpleadoRoutingModule, //para el modulo de rutas
        EmpleadoComponent,
        HttpClientModule,
        CommonModule
        // DataTablesModule //para tablas
    ],
    providers: [],
})
export class EmpleadoModule { }
