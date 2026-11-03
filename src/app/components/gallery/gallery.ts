import { Component, input, signal, HostListener, ElementRef, inject, ViewEncapsulation } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProjectImage } from '../../models/project.model';

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  images = input.required<ProjectImage[]>();
  activeIndex = signal<number | null>(null);
  private previousFocus: HTMLElement | null = null;
  private el = inject(ElementRef);

  open(index: number): void {
    this.previousFocus = document.activeElement as HTMLElement;
    this.activeIndex.set(index);
    setTimeout(() => {
      (this.el.nativeElement.querySelector('.lightbox-close') as HTMLElement)?.focus();
    });
  }

  close(): void {
    this.activeIndex.set(null);
    this.previousFocus?.focus();
  }

  prev(): void {
    const i = this.activeIndex();
    if (i === null) return;
    this.activeIndex.set((i - 1 + this.images().length) % this.images().length);
  }

  next(): void {
    const i = this.activeIndex();
    if (i === null) return;
    this.activeIndex.set((i + 1) % this.images().length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (this.activeIndex() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }

  onOverlayClick(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains('lightbox-overlay')) this.close();
  }
}
