import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `<span class="tag mono">{{ label() }}</span>`,
  styleUrl: './tag.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TagComponent {
  label = input.required<string>();
}
