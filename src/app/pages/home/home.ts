import { Component, OnInit, inject, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ProjectRowComponent } from '../../components/project-row/project-row';
import { TagComponent } from '../../components/tag/tag';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-home',
  imports: [ProjectRowComponent, TagComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  projects = PROJECTS;
  skills = ['JavaScript Full-Stack', 'Python', 'PrestaShop / WordPress', 'Paiement en ligne', 'IA / RAG'];

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Thony Rasolofondraibe · Développeur Full-Stack');
    this.meta.updateTag({ name: 'description', content: "Portfolio de Thony Rasolofondraibe — Développeur Full-Stack basé à Antananarivo. Backends, API de paiement et outils d'IA." });
  }
}
