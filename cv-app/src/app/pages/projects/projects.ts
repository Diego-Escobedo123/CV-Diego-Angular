import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {

  repos: any[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (data: any[]) => {
        this.repos = (data || []).slice(0, 3);
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching GitHub repos', err);
        this.errorMessage = 'No se pudieron cargar los repositorios (ver consola)';
        this.repos = [];
        this.loading = false;
      }
    });
  }
}