import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {

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

    // ✅ SOLO si estamos en el navegador
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