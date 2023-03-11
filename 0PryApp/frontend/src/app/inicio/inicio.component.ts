import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Informacion } from '../models/informacion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public info: Informacion;


  constructor() {
    this.info = new Informacion('')
  }
  ngOnInit(): void {

  }
  enviar(frm:NgForm){
    alert('Correo enviado!')
    frm.resetForm()

  }
}

