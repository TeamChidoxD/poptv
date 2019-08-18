import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
interface IUsuario{
  nombre:string;
  edad:string;
  direccion:string;
  correo:string;
  mostrar:boolean;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  public usuarios:IUsuario[];
  constructor(public router:Router) { 
    this.usuarios=[];
    this.usuarios.push({nombre:"", edad:"", direccion:"", correo:"", mostrar:true});
  }

  third(){
    this.router.navigate(['third']);
  }

  ngOnInit() {
  }

}
