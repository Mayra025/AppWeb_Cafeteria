import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  providers: [LoginService],
})

export class LoginComponent {
  model: Usuario;
  public status: string;
  title: String = 'Iniciar sesión';

  public error: string


  constructor(
    private router: Router,

    private loginService: LoginService,
  ) {
    this.status = '';
    this.model = new Usuario("", "", "", "", "", "", "", "");
    this.error = '';
  }

  login(frm: NgForm) {
    this.loginService.login(this.model.user, this.model.password, this.model.rol)
      .subscribe(res => {
        this.status = 'success';
        console.log(res);
        frm.reset();
      },
        error => {
          this.error = error.error.message;
          this.status = 'failed';
          console.log(<any>error);
        }

      );
  }
  logout() {
    /*
        this.cuentaService.logout().subscribe(res => {
          console.log(res);
          window.location.reload();
    
        });
    */
  }



}

