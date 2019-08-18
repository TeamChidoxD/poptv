import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export interface datosPrograma{
    id_show: number;
    titulo: string;
    categoria: string;
    fecha_emision: string;
    temporadas: number;
    elenco: string;
    descripcion: string;
}

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    public headers = new HttpHeaders();
    constructor(public route:ActivatedRoute, public http:HttpClient, public params:HttpParams) { }

    public mostrarPrograma(){
        return this.http.get('http://localhost/apis/programas.php');
    }
    
}