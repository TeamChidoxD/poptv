import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

interface IClientes{
  nombre: string;
  edad: number;
  direccion: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public ArrClientes: IClientes[];
  public mensaje_error: string;
  public indice: number;

  public palabraActual:string;
  constructor(public http:HTTP) { 
    this.http.get("http://localhost/api/clientes.php",{},{"Content-Type":"application/json"}).then(response => {
      this.ArrClientes = JSON.parse(response.data);
    }).catch(error => {
      this.mensaje_error = error.error;
    });
    this.indice=0;
  }

  public Cargar():void
  {
    
  }

  public myFunction() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ 
    x.className = x.className.replace("show", ""); 
    }, 
    5000);
  }

  public cambiarPalabra()
  {
    this.indice ++;
    this.palabraActual = this.ArrClientes[this.indice].nombre;
    this.myFunction();
  }

  ngOnInit() {

    let intervalo =setInterval( ()=>{
      this.cambiarPalabra();
    },5000);

    clearInterval(intervalo);
  }

}
