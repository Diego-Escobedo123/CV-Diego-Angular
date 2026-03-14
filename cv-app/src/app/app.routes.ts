// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { CvComponent } from './pages/cv/cv';
import { AboutComponent } from './pages/about/about';
import { SkillsComponent } from './pages/skills/skills';
import { ExperienceComponent } from './pages/experience/experience';
import { StudiesComponent } from './pages/studies/studies';

export const routes: Routes = [

  {
    path: '',
    component: CvComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },

  {
    path: 'experience',
    component: ExperienceComponent,
    children: [
      {
        path: 'studies',
        component: StudiesComponent
      }
    ]
  },

  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent)
  },

  {
    path: '**',
    redirectTo: ''
  }

];