//solo hay registro de Cliente

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Usuario } from '../models/usuario';
import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [LoginService]
})
export class RegistroComponent implements OnInit {
  title: string = 'Regístrate';
  public error: string = "";
  public success: string = "";

  public reg: Usuario;

  mostrar = false;

  constructor(
    private loginService: LoginService
  ) {
    this.reg = new Usuario('', '', 'cliente', '', '', '', '', '')
  }
  ngOnInit(): void {

  }

  registro(form: NgForm) {
    this.loginService.create(this.reg).subscribe(
      resp => {
        this.error = "";
        this.success = "Usuario registrado";
        console.log(resp);
        form.reset()

      }
      ,
      error => {
        this.error = error.error.message;
        this.success = "";
        console.log(<any>error);
      }
    );
  }
}

