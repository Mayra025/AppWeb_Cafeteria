import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from '../service/cafeteria.services';
import { Plato } from '../models/plato';
import { Pedido } from '../models/pedidos';
import { Global } from '../service/global';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  providers:[CafeteriaService]
})
export class PedidoComponent implements OnInit{
  public platos: Plato[];
  public pedidos: Pedido[]; 
  public url: string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Invoiceheader:any;
  
  //para el ingreso de un pedido
  public pedido: Pedido;
  public pedidoGuardar: Pedido;
  public status: string;
  public idGuardado: string;
  public titulo: string
  constructor(
    private _cafeteriaService:CafeteriaService,
  ){
    this.url = Global.url;
    this.platos = [];
    this.pedidos = [];

    this._cafeteriaService.getPlatos().subscribe(
      res =>{
        this.platos = res.platos;
      },
      error => {
        console.log(<any>error);
      }
    );

    this.titulo = "Guardar Pedido";
    this.url = Global.url;
    this.pedido = new Pedido("", "", "", 1, "");
    this.pedidoGuardar = new Pedido("", "", "", 1, "");
    this.status = '';
    this.idGuardado = '';
  }
  ngOnInit(): void {
    this.getPlatos();

    this.dtOptions = {
      pagingType: 'full_numbers',
      language:{
        searchPlaceholder:"Nombre del Plato"
      },
    };
    this.LoadInvoice();
    this.getPedidos();
  }

  getPlatos(){
    this._cafeteriaService.getPlatos().subscribe(
      res => {
        if(res.platos) {
          this.platos = res.platos;
          console.log(this.platos)
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  LoadInvoice(){
    this._cafeteriaService.getPlatos().subscribe(
      res=>{
        this.Invoiceheader = res;
        this.dtTrigger.next(null);
      }
    )
  }

  getPedidos() {
    this._cafeteriaService.getPedidos().subscribe(
      response => {
        if (response.pedidos) {
          this.pedidos = response.pedidos;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  
  //para guardar con archivos, idk 
  guardarPedido (form: NgForm) {
    this._cafeteriaService.guardarPedido(this.pedido).subscribe(
      response => {
        if (response.pedido) {
                this.pedidoGuardar = response;
                this.status = 'success';
                console.log(response.pedido._id);
                form.reset();
              
          } else {
            this.status = 'failed';
          }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  

}
