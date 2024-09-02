import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombreUsuario: string = '';
  fechaHoy!: string;

  
  constructor(public navCtrl: NavController,
    private photoService: PhotosService
  ) { 
    this.photos = this.photoService.photos;
  }
  

  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
    const hoy = new Date();

    this.fechaHoy = hoy.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  photos: string[] = [];

  async takePhoto(){
    await this.photoService.addNewPhoto();
  }
  

  cerrarSesion() {
    // Eliminar el indicador de que el usuario está autenticado
    localStorage.removeItem('ingresado');
   
    // Opción adicional: También puedes eliminar otros ítems relacionados con la sesión del usuario
    // localStorage.removeItem('usuario');
    // localStorage.removeItem('nombreUsuario');
    // localStorage.removeItem('passwordUsuario');
    // pero  no lo vamos a hacer jijiji

    
    // Redirigir al usuario a la página de login
    this.navCtrl.navigateRoot('login');
  }

  

}
