import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { promise } from 'protractor';
import { reject } from 'q';
import { resolve } from 'url';
import { environment } from 'src/environments/environment';

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
export class ClienteService {

  constructor(private http: HTTP) { }

  public getProgramas():Promise<datosPrograma[]>{
    let promesa:Promise<datosPrograma[]>= new Promise((resolve,reject)=>{
      this.http.get(environment.servicio_programas,{},{"Content-Type":"application/json"}).then(response=>{
        resolve(JSON.parse(response.data));
      }).catch(error=>{
        reject(error);
      })
    });
    return promesa;
  }
}
