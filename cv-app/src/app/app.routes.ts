import { Routes } from '@angular/router';

import { CvComponent } from './pages/cv/cv';
import { AboutComponent } from './pages/about/about';
import { SkillsComponent } from './pages/skills/skills';
import { ExperienceComponent } from './pages/experience/experience';
import { StudiesComponent } from './pages/studies/studies';
import { ProjectsComponent } from './pages/projects/projects';

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
      },
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ]
  },

  
  {
    path: '**',
    redirectTo: ''
  }

];