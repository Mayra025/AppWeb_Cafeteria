import { Component, EventEmitter, Output } from '@angular/core';
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
  id: any = '';

  public error: string
  @Output('msj') msj = new EventEmitter<boolean>();


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

        switch (frm.value.rol) {
          case "cliente":
            this.router.navigate(['/cliente'], {
              queryParams: {
                user: this.model.user,
                pwd: this.model.password,
                rol: this.model.rol
              },
              fragment: 'success'
            });

            break;
          case "empleado":
            this.router.navigate(['/empleado']);
            break;
          default:
            break;
        }
        // frm.reset();

      },
        error => {
          this.error = error.error.message;
          this.status = 'failed';
          console.log(<any>error);
        }

      );

  }




}

