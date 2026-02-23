import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales';
import { LenguajesComponent } from './components/lenguajes/lenguajes';
import { VirtudesComponent } from './components/virtudes/virtudes';
import { TablaEducacionCompetenciaComponent } from './components/tabla-educacion-competencia/tabla-educacion-competencia';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DatosPersonalesComponent, LenguajesComponent, VirtudesComponent, TablaEducacionCompetenciaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-app');

   modoOscuro: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  toggleTema(): void {
    this.modoOscuro = !this.modoOscuro;

    if (this.isBrowser) {
      if (this.modoOscuro) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }
}