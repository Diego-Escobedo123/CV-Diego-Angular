import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studies.html',
  styleUrl: './studies.css'
})
export class StudiesComponent {

  estudios = [
    {
      institucion: "Universidad Francisco Marroquín",
      carrera: "Ingeniería en Ciencias de la Computación",
      periodo: "2025 - Actualidad"
    },
    {
      institucion: "Colegio Bilingüe",
      carrera: "Bachillerato en Ciencias y Letras",
      periodo: "Graduado"
    }
  ];

}