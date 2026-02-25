import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-educacion-competencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-educacion-competencia.html',
  styleUrls: ['./tabla-educacion-competencia.css']
})
export class TablaEducacionCompetenciaComponent {

  mostrarEducacion: boolean = true;

  toggleEducacion(): void {
    this.mostrarEducacion = !this.mostrarEducacion;
  }
}