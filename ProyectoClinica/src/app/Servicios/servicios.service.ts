import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class servicios {

    constructor(private http: HttpClient) { //se crea constructor donde se definen las clases o librerias que se utilizaran
    }

    urlLocal = "http://localhost:8010";

    public obtenerUsuarioById(usua_id: number): Observable<any>{
        return this.http.get<any>(`${this.urlLocal}/usuario/obtener-usuario/${usua_id}`)
    }

}