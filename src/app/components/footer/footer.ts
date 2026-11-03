import { Component, ViewEncapsulation } from '@angular/core';

const GITHUB_URL = '';
const LINKEDIN_URL = '';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  githubUrl = GITHUB_URL;
  linkedinUrl = LINKEDIN_URL;
}
