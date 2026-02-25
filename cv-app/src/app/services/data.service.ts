import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  skills = ['Angular', 'TypeScript', 'CSS'];

  studies = [
    {
      year: 2025,
      institution: 'Universidad Francisco Marroquín',
      degree: 'Ingeniería en Ciencias de la Computación'
    },
    {
      year: 2024,
      institution: 'Colegio Bilingüe ABC',
      degree: 'Bachillerato en Ciencias y Letras'
    }
  ];

}