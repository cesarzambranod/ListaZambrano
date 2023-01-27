import { Component } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss'],
})
export class ListaEstudiantesComponent {
  ListarEstudiantes: Estudiante[] = [
    {
      nombre: 'Ramon',
      apellido: 'Perez',
      grupo: 2,
      curso: 'Angular',
      nota: 4,
      aprobado: false,
      email: 'rperez@gmail.com',
      foto: 'assets/estudiante.png',
    },
    {
      nombre: 'Juan',
      apellido: 'Martinez',
      grupo: 1,
      curso: 'Angular',
      nota: 8,
      aprobado: true,
      email: 'jmartinez@gmail.com',
      foto: 'assets/estudiante.png',
    },
    {
      nombre: 'Pablo',
      apellido: 'Remirez',
      grupo: 1,
      curso: 'react',
      nota: 9,
      aprobado: true,
      email: 'pramirez@gmail.com',
      foto: 'assets/estudiante.png',
    },
  ];
}
