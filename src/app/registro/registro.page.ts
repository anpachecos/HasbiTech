import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController  ) { 
    
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
    });

  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    
    if (this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: '¡Faltan datos!',
          message: 'Por favor, completa todos los campos para registrarte',
          buttons: ['Aceptar'],
        });
  
      await alert.present();
      return; //Para evitar que la función continue.
    } else {
      var usuario = {
        nombre: f.nombre,
        password: f.password,
      };

      localStorage.setItem('usuario', JSON.stringify(usuario));

      const alert = await this.alertController.create({
          header: '¡Registro Completo!',
          message: 'Ya puedes ingresar con tu usuario y contraseña',
          buttons: ['Aceptar']
      });

      await alert.present();
      this.navCtrl.navigateRoot('login'); // Opcional: Navegar al login después de registrarse.

    }
    
  }

}
