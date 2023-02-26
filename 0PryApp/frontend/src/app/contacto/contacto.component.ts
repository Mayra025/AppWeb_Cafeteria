import { Component, ElementRef, OnInit,Renderer2,ViewChild } from '@angular/core';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public reg: Contacto;

  mostrar=false;

  constructor() {
    this.reg = new Contacto('', '', '', '')
  }

  ngOnInit(): void {

  }

}
