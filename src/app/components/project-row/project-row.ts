import { Component, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-row',
  imports: [RouterLink],
  templateUrl: './project-row.html',
  styleUrl: './project-row.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectRowComponent {
  project = input.required<Project>();
}
