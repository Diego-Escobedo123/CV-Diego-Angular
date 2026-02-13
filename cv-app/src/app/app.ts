import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DatosPersonalesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-app');
}