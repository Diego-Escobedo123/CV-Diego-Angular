import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface ExternalRepoConfig {
  url: string;
  fallback: any;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private userReposUrl = 'https://api.github.com/users/Diego-Escobedo123/repos';

  private externalRepos: ExternalRepoConfig[] = [
    {
      name: 'board-game',
      url: 'https://api.github.com/repos/alejandro-ufm/final-project-board-game-Diego-Escobedo123',
      fallback: {
        id: -1,
        name: 'final-project-board-game-Diego-Escobedo123',
        full_name: 'alejandro-ufm/final-project-board-game-Diego-Escobedo123',
        private: true,
        owner: { login: 'alejandro-ufm' },
        html_url: 'https://github.com/alejandro-ufm/final-project-board-game-Diego-Escobedo123',
        description: 'Chinese Checkers game developed for the Programming II course (contributions by Diego Escobedo)',
        stargazers_count: 0
      }
    },
    {
      name: 'parcial-1-hangman',
      url: 'https://api.github.com/repos/alejandro-ufm/parcial-no-1-hangman-Diego-Escobedo123',
      fallback: {
        id: -2,
        name: 'parcial-no-1-hangman-Diego-Escobedo123',
        full_name: 'alejandro-ufm/parcial-no-1-hangman-Diego-Escobedo123',
        private: true,
        owner: { login: 'alejandro-ufm' },
        html_url: 'https://github.com/alejandro-ufm/parcial-no-1-hangman-Diego-Escobedo123',
        description: 'Hangman / Parcial 1 - Programming II (contributions by Diego Escobedo)',
        stargazers_count: 0
      }
    },
    {
      name: 'parcial-2-pokemon',
      url: 'https://api.github.com/repos/alejandro-ufm/parcial-no-2-pok-mon-battle-Diego-Escobedo123',
      fallback: {
        id: -3,
        name: 'parcial-no-2-pok-mon-battle-Diego-Escobedo123',
        full_name: 'alejandro-ufm/parcial-no-2-pok-mon-battle-Diego-Escobedo123',
        private: true,
        owner: { login: 'alejandro-ufm' },
        html_url: 'https://github.com/alejandro-ufm/parcial-no-2-pok-mon-battle-Diego-Escobedo123',
        description: 'Pokemon Battle / Parcial 2 - Programming II (contributions by Diego Escobedo)',
        stargazers_count: 0
      }
    }
  ];

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any[]> {
    console.log('[GithubService] getRepos() started');

    const myRepos$ = this.http.get<any[]>(this.userReposUrl).pipe(
      catchError(err => {
        console.error('[GithubService] Error fetching user repos', err);
        return of([] as any[]);
      })
    );

    const externalObservables = this.externalRepos.map(cfg =>
      this.http.get<any>(cfg.url).pipe(
        catchError(err => {
          console.warn(`[GithubService] External repo "${cfg.name}" not accessible => using fallback`, err && err.status);
          return of(cfg.fallback);
        })
      )
    );

    return forkJoin([myRepos$, ...externalObservables]).pipe(
      map(results => {
        const myRepos = results[0] as any[] || [];
        const externals = results.slice(1) as any[];

        console.log('[GithubService] myRepos length =', myRepos.length);
        externals.forEach((ext, i) => {
          console.log(`[GithubService] external ${this.externalRepos[i].name} => owner:`, ext?.owner?.login ?? 'null', ' name:', ext?.name);
        });

        const myTop = myRepos.slice(0, 2);
        return [...myTop, ...externals];
      })
    );
  }
}