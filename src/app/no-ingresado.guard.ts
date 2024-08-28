import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class NoIngresadoGuard implements CanActivate {

  constructor(public navCtrl : NavController){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){
        this.navCtrl.navigateRoot('inicio'); //Si está ingresado, lo redirigimos a inicio.
        return false;
      } else {
        return true; //Si no está ingresado lo dejaremos pasar a la página que se intenta, en este caso a login o a registrate. 
      }



  } 
}
