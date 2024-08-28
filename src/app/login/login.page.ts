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
  
    // Verifica si ya existe un usuario en localStorage
    if (usuario && usuario.nombre && usuario.password) {
      // Verifica si el nombre y la contraseña coinciden y no son cadenas vacías
      if (usuario.nombre === f.nombre && usuario.password === f.password
          && f.nombre !== '' && f.password !== '') {
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
      // Si no hay un usuario registrado en localStorage, muestra un mensaje de error
      //Realmente necesitamos este código porque no vamos a hacer un registro de usuarios
      //Esto estará hecho por detrás en la base de datos, pero por ahora, lo simulamos.
      //Podría hacer un registro, pero no está dentro de los requerimientos de este proyecto
      const alert = await this.alertController.create({
        header: 'Campos Vacíos!',
        message: 'Por favor, vuelve a ingresar los datos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      // Evita registrar un nuevo usuario en este punto
    }
  }

}
