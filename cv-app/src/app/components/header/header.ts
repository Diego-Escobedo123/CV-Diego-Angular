import { Component, OnInit, Inject, PLATFORM_ID, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdviceService } from '../../services/advice.service';

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

  // Estado visual / lógica
  saludo: string = '';
  mostrarContacto: boolean = true;
  isBrowser: boolean;
  fechaActual: Date = new Date();

  consejo: string = '';
  cargandoConsejo = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private adviceService?: AdviceService
  ) {
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

    if (this.adviceService) {
      this.loadAdvice();
    }
  }

  toggleTema(): void {
    this.cambiarTema.emit();
  }

  toggleContacto(): void {
    this.mostrarContacto = !this.mostrarContacto;
  }

  descargarPDF(): void {
    if (this.isBrowser) {
      window.print();
    }
  }

  loadAdvice(): void {
    if (!this.adviceService) return;
    this.cargandoConsejo = true;
    this.adviceService.getAdvice().subscribe({
      next: (txt: string) => {
        this.consejo = txt;
        this.cargandoConsejo = false;
      },
      error: () => {
        this.consejo = 'No se pudo cargar el consejo.';
        this.cargandoConsejo = false;
      }
    });
  }
}