import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './cliente.component';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common'; // Agrega NgIf aquí


@NgModule({
    declarations: [
        ClienteComponent
   ,    NgIf // Agrega NgIf aquí


    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule

    ],
    providers: [],
})
export class ClienteModule { }
