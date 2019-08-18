import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition/ngx';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import {Router} from '@angular/router';

interface IPalabra{
  palabra: string;
}

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  public arrPalabra: IPalabra[];
  public mensaje_error: string;
  public indice: number;
  public pts: number;
  public palabraActual: string;
  public intervalo: any;
  message:string; //Aqui guardaremos el mensaje que nuestro dispositivo a detectado
  constructor(public http:HTTP, public speechRecognition: SpeechRecognition, public router:Router,
    public toastController: ToastController, public alertController: AlertController, private toast: Toast) {
      this.http.get("http://192.168.137.63/api/palabras.php",{},{"Content-Type":"application/json"}).then(response => {
      this.arrPalabra = JSON.parse(response.data);
    }).catch(error => {
      this.mensaje_error = error.error;
    });      
    this.indice = 0;
  }

  public Cargar():void
  {
    if(this.indice == 3){
    }
    else{
    this.cambiarPalabra();
    this.startListening();
    this.intervalo = setInterval( ()=>{
    this.cambiarPalabra();
    this.startListening();
    },10000);
    }
  }

  public Terminar():void
  {
   if (this.intervalo) {
      clearInterval(this.intervalo);
      
    }
  }

  public cambiarPalabra()
  {
    this.palabraActual = this.arrPalabra[this.indice].palabra;
    this.indice++;
    this.Toast(this.palabraActual);
  } 
  
  second(){
    this.router.navigate(['second']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Mission 1',
      message: 'After many years of research we have finally found new worlds and at this moment you find yourself' + ' ' +
      'in Fercho-117, an unknown and dangerous planet. If you wish to conquer and learn you must accept this mission!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.second();
          }
        }, {
          text: 'Accept',
          handler: () => {
            this.Cargar();
          }
        }
      ]
    })
    await alert.present();
  }

  async Toast(palabraActual: string) {
    const toast = await this.toastController.create({
      message: palabraActual,
      position: 'top',
      cssClass: "centerButton toast-container",
    });
    toast.present();
  }

  //Cada vez que se inicie nuestra vista, se ejecutara la funcion getPermision()
  ionViewDidLoad(){
    this.getPermission();
  }

  getPermission(){
    //comprueba que la aplicación tiene permiso, de no ser así nos la pide
    this.speechRecognition.hasPermission().
      then((hasPermission:boolean)=>{
        if(!hasPermission){
          this.speechRecognition.requestPermission()
          .then(
            () => console.log('Granted'),
            () => console.log('Denied')
          );
        }
      })
  }

  async correct() {
    const alert = await this.alertController.create({
      message: 'Excellent',
    });
    await alert.present();
  }

  async wrong() {
    const alert = await this.alertController.create({
      message: 'Try again',
    });
    await alert.present();
  }

  //Esta función es la encargada de activar el reconocimiento de voz 
  startListening(){
    const options: SpeechRecognitionListeningOptions = {
      language: "en-US",
      matches: 1,
 };
    //let options = {
      //language: "es-ES",//fijamos el lenguage
      //matches: 1,//Nos devuelve la primera opción de lo que ha escuchado
      //si ponemos otra cantidad, nos dará una variante de la palabra/frase que le hemos dicho
    //}
    this.speechRecognition.startListening(options).subscribe(matches=>{
      this.message = matches[0]; //Guarda la primera frase que ha interpretado en nuestra variable

      if (this.message == this.palabraActual)
      {
        this.correct()
      }
      else
      {
        this.wrong() 
        this.startListening()
      }
    })
  }

  ngOnInit() {
    this.presentAlertConfirm();
    this.ionViewDidLoad();
  }

}
