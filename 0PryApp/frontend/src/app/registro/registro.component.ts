import { Component, OnInit } from '@angular/core';
import { Registro } from '../models/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public reg: Registro;


  constructor() {
    this.reg = new Registro('', '', '', '', '', '')
  }
  ngOnInit(): void {

  }
}

