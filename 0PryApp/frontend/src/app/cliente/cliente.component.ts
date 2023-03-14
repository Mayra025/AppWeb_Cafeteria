import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/service/global';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  providers: [LoginService]
})
export class ClienteComponent implements OnInit {
  public data: any;
  public resumen: any


  public url: string;
  user: any;
  pwd: any;
  rol: any;
  fragment: any;


  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _loginService: LoginService

  ) {
    this.url = Global.url;
    this.user = '';
  }

  ngOnInit(): void {
    this.user = this._route.snapshot.queryParamMap.get('user');
    this.pwd = this._route.snapshot.queryParamMap.get('pwd');
    this.rol = this._route.snapshot.queryParamMap.get('rol');
    this.fragment = this._route.snapshot.fragment;
    console.log(this.user)
    this.getInfo();

  }

  getInfo() {
    fetch(this.url + 'cliente', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'user': this.user,
        'password': this.pwd,
        'rol': this.rol
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.r)
        console.log(data.message)
        this.data = data.r;
      });

  }


  logout() {
    if (confirm('¿Estás seguro que deseas salir?')) {
      this._router.navigate(['/inicio']);

      this._loginService.logout().subscribe(
        resp => {
          console.log(resp)
          // window.location.reload();

          // this._router.navigate(['/login']);
        }, err => {
          console.log(err);
        })
    }
  }

}



