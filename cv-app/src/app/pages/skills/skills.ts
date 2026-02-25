import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {

  skills = [
    "Java",
    "Python",
    "JavaScript",
    "Angular",
    "HTML & CSS",
    "Git & GitHub"
  ];

  constructor(public dataService: DataService) {}

}