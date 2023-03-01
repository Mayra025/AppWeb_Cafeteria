import { Component } from '@angular/core';
//import { CuentaService } from 'src/app/services/cuenta.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  // providers: [CuentaService],
})

export class LoginComponent {
  model: Usuario;
  public status: string;
  title: String = 'Iniciar sesión';



  constructor(
    // private cuentaService: CuentaService,
  ) {
    this.status = '';
    this.model = new Usuario("", "", "", "", "", "", "");

  }

  login(frm: NgForm) {
    /* this.cuentaService.login(this.model.user, this.model.password)
       .subscribe(res => {
         this.status = 'success';
         console.log(res);
         frm.reset();
 
       },
         error => {
           this.status = 'failed';
           console.log(<any>error);
         }
 
       );*/
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

