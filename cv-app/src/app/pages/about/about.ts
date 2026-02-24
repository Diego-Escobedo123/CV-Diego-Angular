import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

  nombre = "Diego Andrés Escobedo Morán";
  carrera = "Ingeniería en Ciencias de la Computación";
  universidad = "Universidad Francisco Marroquín";

}