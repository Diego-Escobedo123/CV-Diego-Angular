import { Component, signal } from '@angular/core';
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
}