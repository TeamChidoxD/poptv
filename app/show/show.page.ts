import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  public formProg: FormGroup;
  public mensajeFormulario: String; 
  constructor(public formBuilder: FormBuilder, public http:HTTP) { 
    this.formProg = this.formBuilder.group({
      titulo:['',Validators.required], 
      categoria:['', Validators.required],
      fecha_emision:['', Validators.required],
      temporadas:['', Validators.required],
      elenco:['', Validators.required],
      descripcion:['', Validators.required]
    });
  }  

  ngOnInit() {
  }
  public Register():void{
    this.mensajeFormulario="Guardando...";
    this.http.get("http://localhost/apis/guardar_show.php",this.formProg.value,{"Content-Type":"application/json"}).then(response=>{
    this.mensajeFormulario="Guardado correctamente";
    this.formProg.reset();
    }).catch(error=>{
      this.mensajeFormulario = error.error;
    });
  }
}
