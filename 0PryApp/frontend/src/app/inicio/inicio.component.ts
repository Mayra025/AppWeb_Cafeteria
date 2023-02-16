import { Component, OnInit } from '@angular/core';
import { Informacion } from '../models/informacion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public info: Informacion;


  constructor() {
    this.info = new Informacion('', '')
  }
  ngOnInit(): void {

  }
}

