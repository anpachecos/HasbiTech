import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el Router para la redirección

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  paletteToggle = false;

  constructor(private router: Router) {} // Añadimos Router en el constructor

  ngOnInit() {
    // Leer el estado guardado del modo oscuro desde el localStorage
    const storedThemePreference = localStorage.getItem('darkMode');
    if (storedThemePreference) {
      this.paletteToggle = JSON.parse(storedThemePreference);
      this.toggleDarkPalette(this.paletteToggle);
    }
  }

  // Manejar el cambio desde el botón y guardar el estado en localStorage
  toggleChange(ev: any) {
    this.paletteToggle = ev.detail.checked;
    localStorage.setItem('darkMode', JSON.stringify(this.paletteToggle)); // Guardar en localStorage
    this.toggleDarkPalette(this.paletteToggle);
  }

  // Agregar o eliminar la clase "ion-palette-dark" en el elemento html
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // Función para redirigir a la página de Datos Personales
  irADatosPersonales() {
    this.router.navigate(['/personal-data']); // Redirigir a la vista de datos personales
  }
}
