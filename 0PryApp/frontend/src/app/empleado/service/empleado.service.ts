import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from 'src/app/models/producto';
import { Observable } from 'rxjs';
import { Global } from 'src/app/service/global';

@Injectable()
export class EmpleadoService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    //ver todos los productos
    getProductos(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'productos', { headers: headers });
    }

    //agregar prod
    agregarProducto(prod: Producto): Observable<any> {
        let params = JSON.stringify(prod);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'agregar-producto', params, { headers: headers });
    }
    //ver 
    getProducto(id: String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'producto/' + id, { headers: headers });
    }
    //editar 
    actualizarProducto(prod: Producto): Observable<any> {
        let params = JSON.stringify(prod);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'producto/' + prod._id, params, { headers: headers });
    }
    //eliminar 
    eliminarProducto(id: String): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'producto/' + id, { headers: headers });
    }
}