import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from '../service/cafeteria.services';
import { Plato } from '../models/plato';
import { Global } from '../service/global';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  providers:[CafeteriaService]
})
export class PedidoComponent implements OnInit{
  public platos: Plato[];
  public url: string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Invoiceheader:any;

  constructor(
    private _cafeteriaService:CafeteriaService,
  ){
    this.url = Global.url;
    this.platos = [];

    this._cafeteriaService.getPlatos().subscribe(
      res =>{
        this.platos = res.platos;
      },
      error => {
        console.log(<any>error);
      }
    );
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
}
