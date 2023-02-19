import { Component,OnInit } from '@angular/core';
import { Registro } from '../models/registro';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  public reg: Registro;

  constructor() {
    this.reg = new Registro('', '', '', '', '', '')
  }
  ngOnInit(): void {

  }

}
