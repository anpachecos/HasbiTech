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
    public navCtrl: NavController
  ) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  async ingresar() {
    var f = this.formularioLogin.value;

    // Intenta recuperar el usuario desde localStorage
    var usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    // Si el usuario ya existe en localStorage
    if (usuario && usuario.nombre && usuario.password) {
      // Verifica si el nombre y la contraseña coinciden
      if (usuario.nombre === f.nombre && usuario.password === f.password) {
        console.log('Ingresado!!!');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: '¡Usuario Incorrecto!',
          message: 'Los datos ingresados no son válidos',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    } else {
      // Si no existe un usuario registrado, registra el usuario actual
      localStorage.setItem('usuario', JSON.stringify({ nombre: f.nombre, password: f.password }));
      localStorage.setItem('ingresado', 'true');
      localStorage.setItem('nombreUsuario', f.nombre);
      localStorage.setItem('passwordUsuario', f.password);
      console.log('Usuario registrado e ingresado!!!');
      this.navCtrl.navigateRoot('inicio');
    }
  }
}
