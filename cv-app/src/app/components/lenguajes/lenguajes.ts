import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lenguajes.html',
  styleUrls: ['./lenguajes.css']
})
export class LenguajesComponent {

  searchText: string = '';

  habilidades: string[] = [
    'Python',
    'Java'
  ];

  get habilidadesFiltradas(): string[] {
    return this.habilidades.filter(h =>
      h.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  limpiarBusqueda(): void {
    this.searchText = '';
  }
}
