import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacto } from '../models/contacto';
import { Plato } from '../models/plato';
import { Pedido } from '../models/pedidos';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class CafeteriaService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }
    //ver todos los eventos
    //http://localhost:3600/eventos
    getPlatos():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'platos',{headers: headers});
    }
    //guardar evento
    //http://localhost:3600/guardar-evento
    guardarPlato(plato: Plato): Observable<any> {
        let params = JSON.stringify(plato);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-plato',params,{headers: headers});
    }

    //ver plato
    //http://localhost:3600/evento/:id
    getPlato(id: String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'plato/'+id,{ headers: headers });
    }

    //editar plato
    //http://localhost:3600/evento/:id
    updatePlato(plato: Plato): Observable<any> {
        let params = JSON.stringify(plato);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url +'plato/'+plato._id,params, { headers: headers });
    }
    //eliminar evento
    //http://localhost:3600/evento/:id
    deletePlato(id: String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'plato/'+id,{ headers: headers });
    }

   
    //guardar contacto
    //http://localhost:3600/guardar-contacto
    guardarContacto(contacto: Contacto): Observable<any> {
        let params = JSON.stringify(contacto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-contacto',params,{headers: headers});
    }

    //guardar pedido
    //http://localhost:3600/guardar-evento
    guardarPedido(pedido: Pedido): Observable<any> {
        let params = JSON.stringify(pedido);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-pedido',params,{headers: headers});
    }

    //http://localhost:3600/eventos
    getPedidos():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'pedidos',{headers: headers});
    }

}