import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage {

  // Acá puse un array con asistencias, asi que si quieren más se pueden crear aquí y se listarán en el html. 
  asistencias = [
    {
      titulo: 'Asistencia 1',
      fecha: '2024-09-03',
      ubicacion: 'Sala A',
      descripcion: 'Descripción de la Asistencia 1'
    },
    {
      titulo: 'Asistencia 2',
      fecha: '2024-09-05',
      ubicacion: 'Sala B',
      descripcion: 'Descripción de la Asistencia 2'
    },
    {
      titulo: 'Asistencia 3',
      fecha: '2024-09-07',
      ubicacion: 'Sala C',
      descripcion: 'Descripción de la Asistencia 3'
    }
  ];

  constructor() { }

}
