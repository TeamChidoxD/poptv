import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public frmLogin:FormGroup;
  public mensajeLogin:string;

  constructor(public ruta:Router, public formbuild:FormBuilder, public http:HTTP, public alertController: AlertController) { 
    this.frmLogin=this.formbuild.group({
      usuario:["",Validators.required],
      contrasena:["",Validators.required]
    });
  }

  ngOnInit() {
  }
  public Iniciar():void{
    this.http.get("http://localhost/apis/Login.php",this.frmLogin.value,{"Content-Type":"application/json"}).then(Response=>{
    let validar=JSON.parse(Response.data);
    if(validar.respuesta == true)
    {
      this.ruta.navigate(['show']);
    }
    else{
      this.presentAlert();
    }
  }).catch(error=>{
      this.mensajeLogin=error.error;
      console.log(error.error);
      alert(error.error)
    });
  }

  registrarse(){
    this.ruta.navigate(['administrador']);
  }

  verProg(){
    this.ruta.navigate(['prog-ver']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Incorrecto',
      message: 'Usuario o contraseña invalido',
      buttons: ['OK']
    });

    await alert.present();
}
}
