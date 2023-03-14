import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Observable } from 'rxjs';
import { Usuario } from "../models/usuario";

@Injectable()

export class LoginService {
    public url: string;

    constructor(
        private _http: HttpClient,
    ) {
        this.url = Global.url;
    }

    login(user: string, password: string, rol: string) {
        let params = JSON.stringify({ user, password, rol });
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'login', params, { headers: headers });
    }

    //post : http://localhost:3600/create-user
    create(user: Usuario): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'create-user', params, { headers: headers });
    }

    // logout(): Observable<any> {
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //     return this._http.get(this.url + 'logout', { headers: headers, withCredentials: true });
    // }
    //http://localhost:3600/logout
    logout() {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'logout', { headers: headers });
    }


}