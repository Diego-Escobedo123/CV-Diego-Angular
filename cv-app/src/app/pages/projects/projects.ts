import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  repos: any[] = [];
  loading = true;
  errorMessage: string | null = null;

  private routerSub?: Subscription;

  constructor(
    private githubService: GithubService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ProjectsComponent ngOnInit - setting up router listener and initial fetch');

    // Hacer fetch inmediatamente
    this.loadRepos();

    // También escuchar eventos de navegación para garantizar fetch cuando navegues sin refresh
    this.routerSub = this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe((evt) => {
        const nav = evt as NavigationEnd;
        if (nav.urlAfterRedirects === '/projects' || nav.url === '/projects') {
          console.log('NavigationEnd -> /projects detected, reloading repos');
          this.loadRepos();
        }
      });
  }

  private loadRepos(): void {
    this.loading = true;
    this.errorMessage = null;
    console.log('ProjectsComponent - calling GithubService.getRepos()');
    this.githubService.getRepos().subscribe({
      next: (data: any[]) => {
        console.log('Github data received (projects.ts)', data);
        this.repos = (data || []).slice(0, 3);
        this.loading = false;
        try { this.cdr.detectChanges(); } catch (e) { /* noop */ }
      },
      error: (err: any) => {
        console.error('Error fetching GitHub repos', err);
        this.errorMessage = 'No se pudieron cargar los repositorios (ver consola)';
        this.repos = [];
        this.loading = false;
        try { this.cdr.detectChanges(); } catch (e) { /* noop */ }
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}