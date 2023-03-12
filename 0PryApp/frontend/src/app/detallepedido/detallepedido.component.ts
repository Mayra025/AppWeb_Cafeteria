import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from '../service/cafeteria.services';
import { Plato } from '../models/plato';
import { Global } from '../service/global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallepedido',
  templateUrl: './detallepedido.component.html',
  styleUrls: ['./detallepedido.component.css'],
  providers:[CafeteriaService]
})
export class DetallepedidoComponent implements OnInit{

  public url: string;
  public plato: Plato;
  public confirm: boolean;

  constructor(
    private _cafeteriaService: CafeteriaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.plato = new Plato("", "",2.50,"");
    this.confirm = false;
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getPlato(id);
    })
  }
  getPlato(id: string) {
    this._cafeteriaService.getPlato(id).subscribe(
      response => {
        this.plato = response.plato;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  setConfirm(confirm: boolean) {
    this.confirm = confirm;
  }
  borrarplato(id: string) {
    this._cafeteriaService.deletePlato(id).subscribe(
      response => {
        if (response.plato) {
          this._router.navigate(['/platos']);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}


