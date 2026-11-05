import { Component, OnInit, inject, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project.model';
import { TagComponent } from '../../components/tag/tag';
import { GalleryComponent } from '../../components/gallery/gallery';
import { NotFoundComponent } from '../not-found/not-found';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TagComponent, GalleryComponent, NotFoundComponent],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private titleSvc = inject(Title);
  private meta = inject(Meta);

  project = signal<Project | null>(null);
  prevProject = signal<Project | null>(null);
  nextProject = signal<Project | null>(null);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      filter(params => params.has('slug')),
      map(params => params.get('slug'))
    ).subscribe(slug => {
      if (!slug) return;
      const idx = PROJECTS.findIndex(p => p.slug === slug);
      if (idx === -1) {
        this.project.set(null);
        return;
      }
      const p = PROJECTS[idx];
      this.project.set(p);
      this.prevProject.set(PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length]);
      this.nextProject.set(PROJECTS[(idx + 1) % PROJECTS.length]);
      this.titleSvc.setTitle(`${p.title} · Thony Rasolofondraibe`);
      this.meta.updateTag({ name: 'description', content: p.shortDescription });
    });
  }

  goToProject(slug: string): void {
    this.router.navigate(['/projets', slug]);
  }
}
