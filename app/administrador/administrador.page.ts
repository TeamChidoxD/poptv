import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  public formAdmin: FormGroup;
  public mensajeFormulario: String; 
  constructor(public formBuilder: FormBuilder, public http:HTTP) { 
    this.formAdmin = this.formBuilder.group({
      nombre:['',Validators.required], 
      correo:['', Validators.required],
      usuario:['', Validators.required],
      contrasena:['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public Registrarse():void{
    this.mensajeFormulario="Guardando...";
    this.http.get("http://localhost/apis/guardar_administrador.php",this.formAdmin.value,{"Content-Type":"application/json"}).then(response=>{
    this.mensajeFormulario="Guardado correctamente";
    this.formAdmin.reset();
    }).catch(error=>{
      this.mensajeFormulario = error.error;
    });
  }
}
