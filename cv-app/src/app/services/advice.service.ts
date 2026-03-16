import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  private adviceApi = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  getAdvice(): Observable<string> {

    return this.http.get<any>(this.adviceApi).pipe(

      switchMap(response => {

        const advice = response.slip.advice;

        const translateUrl =
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(advice)}&langpair=en|es`;

        return this.http.get<any>(translateUrl).pipe(
          map(res => res.responseData.translatedText)
        );

      }),

      catchError(() => {
        return of('No se pudo obtener el consejo del día.');
      })

    );

  }
}