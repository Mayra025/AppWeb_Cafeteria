import { Component } from '@angular/core';
//import { CuentaService } from 'src/app/services/cuenta.service';
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

  // login(frm: NgForm) {
  //   this.loginService.login({
  //     user: frm.value.user,
  //     password: frm.value.password,
  //     rol: frm.value.rol
  //   })
  //     .subscribe(res => {
  //       this.error = "";
  //       // switch (frm.value.rol) {
  //       //   case "cliente":
  //       // //    this.router.navigate(['/cliente']);
  //       //     break;
  //       //   case "empleado":
  //       //     this.router.navigate(['/empleado']);
  //       //     break;
  //       //   default:
  //       //     break;
  //       // }
  //       this.status = 'success';
  //       console.log(res);
  //       frm.reset();

  //     },
  //       error => {
  //         this.error = error.error.message;
  //         this.status = 'failed';
  //         console.log(<any>error);
  //       }

  //     );
  // }
  login(frm: NgForm) {
    this.loginService.login(this.model.user, this.model.password, this.model.rol)
      .subscribe(res => {
        this.status = 'success';
        console.log(res);
        frm.reset();

      },
        error => {
          this.error='error';
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

