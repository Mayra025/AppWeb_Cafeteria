import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]

})
export class AppComponent {
  title = 'frontend';
  // msjR: any;
  // public log: boolean;

  // constructor(
  //   private loginService: LoginService,
  // ) { this.log = false; }

  // getR(r: any) {
  //   console.log(r);
  //   this.msjR = r;
  //   this.log = r;

  // }
  // logout() {
  //   this.loginService.logout().subscribe(res => {
  //     console.log(res);
  //     window.location.reload();

  //   });
  // }

}