import { Component, ElementRef, OnInit,Renderer2,ViewChild } from '@angular/core';
import { Registro } from '../models/registro';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],


})
export class RegistroComponent implements OnInit {
  public reg: Registro;

  mostrar=false;

  constructor() {
    this.reg = new Registro('', '', '', '', '', '')
  }
  ngOnInit(): void {

  }
}

