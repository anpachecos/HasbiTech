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

  formularioRecuperar: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController  ) { 
    
    this.formularioRecuperar = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
    });

  }

  ngOnInit() {
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmacionPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }


  async recuperar(){
    var f = this.formularioRecuperar.value;
    var usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    if (this.formularioRecuperar.invalid) {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Por favor, asegúrate de que las contraseñas coincidan y que todos los campos estén completos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    if (usuario.nombre === f.nombre) {
      usuario.password = f.password;
      localStorage.setItem('usuario', JSON.stringify(usuario));

      const alert = await this.alertController.create({
        header: '¡Contraseña Restablecida!',
        message: 'Tu contraseña ha sido actualizada correctamente.',
        buttons: ['Aceptar']
      });
      await alert.present();

      this.navCtrl.navigateRoot('login');
    } else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'El nombre de usuario no existe.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    
  }

}
