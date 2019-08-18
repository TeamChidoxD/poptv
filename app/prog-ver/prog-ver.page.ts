import { Component, OnInit } from '@angular/core';
import { datosPrograma, ClienteService } from '../services/cliente/cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prog-ver',
  templateUrl: './prog-ver.page.html',
  styleUrls: ['./prog-ver.page.scss'],
})
export class ProgVerPage implements OnInit {
  public arrPrograma:datosPrograma[];
  public formVisit: FormGroup;
  public mensajeFormulario: String;
  constructor(public ruta:Router, public clienteService:ClienteService, public formBuilder: FormBuilder, public http:HTTP) {
    this.formVisit = this.formBuilder.group({
      id_prog:['',Validators.required], 
      nickname:['',Validators.required], 
      correo:['', Validators.required],
      edad:['', Validators.required],
      ubicacion:['', Validators.required],
      genero:['', Validators.required],
      comentario:['', Validators.required]
    });
   }

  public cargarProgramas():void{
    this.clienteService.getProgramas().then(response=>{
      this.arrPrograma=response;
      console.log(response);
    }).catch(error=>{
      console.log(error.error);
    });
  }

  public hideMe;
  public esconder;

  public hide() {
    this.hideMe = true;
  }
  
  public close() {
    this.hideMe = false;
  }

  public graph(){
    this.ruta.navigate(['resultados']);
  }

  ngOnInit() {
    this.cargarProgramas();
  }

  public Registrarse():void{
    this.mensajeFormulario="Guardando...";
    this.http.get("http://localhost/apis/guardar_visitante.php",this.formVisit.value,{"Content-Type":"application/json"}).then(response=>{
    this.mensajeFormulario="Guardado correctamente";
    this.formVisit.reset();
    this.close();
    }).catch(error=>{
      this.mensajeFormulario = error.error;
    });
  }
}
