import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IngresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController){} // Recuerda que debes importar NavController de '@ionic/angular' y primero debes pónerselo en el constructor.



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem('ingresado') /*Si ingresado es true, el código que pusimos en login. */){
        return true;
      } else {
        this.navCtrl.navigateRoot('login'); //Si no está ingresado, lo redirigimos a login.
        return false;

      }


  }
  
}
