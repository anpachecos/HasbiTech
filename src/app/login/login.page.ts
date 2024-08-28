import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController){ 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)

    })

  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario') || '{}'); /*Esta solución encontré en StackOverflow, 
    pero hay que tener ojo si ha futuro tengo problemas con usuarios creados pero con datos Vacíos, 
    ya que el operados OR pasará objetos localStorage con datos o vacíos.*/


    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado!!!');
      localStorage.setItem('ingresado', 'true');
      localStorage.setItem('nombreUsuario', usuario.nombre); // Guardar el nombre del usuario
      this.navCtrl.navigateRoot('inicio');
    } else {
      const alert = await this.alertController.create({
        header: '¡Usuario Incorrecto!',
        message: 'Los datos ingresados no son válidos',
        buttons: ['Aceptar']
      });

    }
  }
}
