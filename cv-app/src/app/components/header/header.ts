import { Component, OnInit, Inject, PLATFORM_ID, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {

  @Input() modoOscuro!: boolean;

  @Output() cambiarTema = new EventEmitter<void>();

  toggleTema(): void {
    this.cambiarTema.emit();
  }

  saludo: string = '';
  mostrarContacto: boolean = true;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    const hora = new Date().getHours();

    if (hora < 12) this.saludo = '¡Buenos días!';
    else if (hora < 19) this.saludo = '¡Buenas tardes!';
    else this.saludo = '¡Buenas noches!';

    if (this.isBrowser && window.innerWidth < 768) {
      this.mostrarContacto = false;
    }
  }

  toggleContacto(): void {
    this.mostrarContacto = !this.mostrarContacto;
  }

  descargarPDF(): void {
    if (this.isBrowser) {
      window.print();
    }
  }
}