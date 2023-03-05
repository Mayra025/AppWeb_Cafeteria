//solo hay registro de Cliente

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Usuario } from '../models/usuario';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],


})
export class RegistroComponent implements OnInit {
  title: string = 'Regístrate';
  public reg: Usuario;

  mostrar = false;

  constructor() {
    this.reg = new Usuario('', '', 'cliente', '', '', '', '', '')
  }
  ngOnInit(): void {

  }
}

