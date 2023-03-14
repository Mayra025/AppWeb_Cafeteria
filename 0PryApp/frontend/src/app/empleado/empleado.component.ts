import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Global } from 'src/app/service/global';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { EmpleadoService } from './service/empleado.service';
import { Producto } from '../models/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  providers: [EmpleadoService, LoginService]
})
export class EmpleadoComponent implements OnInit {
  productos: any;
  public productoG: Producto;

  public error: string = "";
  public success: string = "";
  dtoptions: DataTables.Settings = {};  //para tabla
  dtTrigger: Subject<any> = new Subject<any>();
  Invoiceheader: any;
  public url: string;
  msjR: any;

  public add: boolean = false;
  public edit: boolean = false;


  constructor(
    private _router: Router,
    private _empleadoService: EmpleadoService,
    private _loginService: LoginService,
    private _route: ActivatedRoute


  ) {
    this.url = Global.url;
    this.productos = [];
    this.productoG = new Producto("", "", "", "");
    this.getProductos();
  }

  ngOnInit(): void {

    this.dtoptions = {
      pagingType: 'full_numbers',
      // searching: true,
      // paging: false,
      // ordering: false,
      // info: false,
      language: {
        searchPlaceholder: 'Escriba el Producto'
      },
    };

    this.LoadInvoice();
  }

  getProductos() {
    this._empleadoService.getProductos().subscribe(
      response => {
        if (response.productos) {
          this.productos = response.productos;
          console.log(this.productos)
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  LoadInvoice() {
    this._empleadoService.getProductos().subscribe(res => {
      this.Invoiceheader = res;
      this.dtTrigger.next(null);
    })
  }

  //Crear
  agregar() {
    this.add = true;
  }

  getR(r: any) {
    console.log(r);
    this.msjR = r;
    this.add = false;
    this.getProductos();
  }

  //Editar
  getProducto(id: String) {
    this._empleadoService.getProducto(id).subscribe(
      response => {
        this.productoG = response.producto;
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  editar(id: string) {
    this.getProducto(id);
    this.edit = true;
  }

  actualizar(form: NgForm) {
    this._empleadoService.actualizarProducto(this.productoG).subscribe(
      resp => {
        this.error = "";
        this.success = "Producto actualizado"
        // this.productoG = resp.response;
        console.log(resp.producto._id);
        this.cerrar();
        this.getProductos()
        // form.reset();
      }, err => {
        this.error = err.error.message;
        this.success = "";
        console.log(<any>err);

      })
  }
  cerrar() {
    if (this.success !== '') {
      alert(this.success)
      this.edit = false;

    } else {
      this.edit = false;
    }
    this.success = ""
  }

  //eliminar
  eliminar(id: String) {
    if (confirm('¿Estás seguro de eliminarlo?')) {
      this._empleadoService.eliminarProducto(id).subscribe(
        response => {
          alert("Producto eliminado")
          this.getProductos()
        },
        error => {
          console.log(<any>error);
        }
        // this.cli = null;
        // window.location.reload();
      )
    }
  }

  logout() {
    if (confirm('¿Estás seguro que deseas salir?')) {
      this._router.navigate(['/inicio']);

      this._loginService.logout().subscribe(
        resp => {
          console.log(resp)
          window.location.reload();

          // this._router.navigate(['/login']);
        }
        // , err => {
        //   console.log(err);
        // }
      )
    }
  }



}

