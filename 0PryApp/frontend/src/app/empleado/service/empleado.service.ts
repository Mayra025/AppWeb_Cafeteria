// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Global } from "../../service/global";
// import { Observable } from 'rxjs';

// @Injectable()
// export class EmpleadoService {
//     public url:string;
//     private _headers: HttpHeaders
//     constructor(
//         private _http:HttpClient,
//     ){
//         this.url=Global.url+"empleado/";
//         this._headers = new HttpHeaders().set('Content-Type','application/json');
//     }

//     getInfo():Observable<any>{
//         return this._http.get(this.url+'info', {headers:this._headers, withCredentials: true});
//     }

//     getClientes():Observable<any>{
//         return this._http.get(this.url+'clientes', {headers:this._headers, withCredentials: true});
//     }

//     addCliente(cliente:any):Observable<any>{
//         let params=JSON.stringify(cliente);
//         return this._http.post(this.url+'clientes',params,{headers:this._headers, withCredentials: true});
//     }

//     updateCliente(cliente:any, id:string):Observable<any>{
//         let params=JSON.stringify(cliente);
//         return this._http.put(`${this.url}clientes/${id}`,params,{headers:this._headers, withCredentials: true});
//     }

//     deleteCliente(id:string):Observable<any>{
//         return this._http.delete(`${this.url}clientes/${id}`,{headers:this._headers, withCredentials: true});
//     }

//     getCuentas():Observable<any>{
//         return this._http.get(this.url+'cuentas', {headers:this._headers, withCredentials: true});
//     }

//     addCuenta(cuenta:any):Observable<any>{
//         let params=JSON.stringify(cuenta);
//         return this._http.post(this.url+'cuentas',params,{headers:this._headers, withCredentials: true});
//     }

//     updateCuenta(cuenta:any, id:string):Observable<any>{
//         let params=JSON.stringify(cuenta);
//         return this._http.put(`${this.url}cuentas/${id}`,params,{headers:this._headers, withCredentials: true});
//     }

//     deleteCuenta(id:string):Observable<any>{
//         return this._http.delete(`${this.url}cuentas/${id}`,{headers:this._headers, withCredentials: true});
//     }

// }

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