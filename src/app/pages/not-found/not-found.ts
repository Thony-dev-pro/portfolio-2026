import { Component, OnInit, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="not-found container">
      <p class="mono accent label">404</p>
      <h1>Page introuvable</h1>
      <p class="secondary">Cette page n'existe pas.</p>
      <a routerLink="/" class="btn btn-outline" style="margin-top:32px;display:inline-block">← Retour à l'accueil</a>
    </div>
  `,
  styleUrl: './not-found.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NotFoundComponent implements OnInit {
  private title = inject(Title);
  ngOnInit(): void { this.title.setTitle('404 · Thony Rasolofondraibe'); }
}
