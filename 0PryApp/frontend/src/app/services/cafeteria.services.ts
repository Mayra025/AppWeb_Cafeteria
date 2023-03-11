import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacto } from '../models/contacto';
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
   
    //guardar evento
    //http://localhost:3600/guardar-contacto
    guardarContacto(contacto: Contacto): Observable<any> {
        let params = JSON.stringify(contacto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-contacto',params,{headers: headers});
    }

}