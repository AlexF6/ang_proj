import { Component, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

export interface MovieItem {
  title: string;
  imageSrc: string; // e.g. 'assets/bcs.jpg'
  synopsis?: string;
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent implements AfterViewInit {
  @Input() title = 'Recomendados';
  @Input() items: MovieItem[] = [];

  @ViewChild('viewport', { static: true }) viewport!: ElementRef<HTMLDivElement>;

  canScrollPrev = false;
  canScrollNext = false;

  ngAfterViewInit(): void {
    // Evalúa estado inicial de flechas
    setTimeout(() => this.updateArrows(), 0);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateArrows();
  }

  private updateArrows() {
    const el = this.viewport.nativeElement;
    this.canScrollPrev = el.scrollLeft > 0;
    this.canScrollNext = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
  }

  scrollBy(direction: 'prev' | 'next') {
    const el = this.viewport.nativeElement;
    const amount = Math.round(el.clientWidth * 0.9); // avanza ~90% del viewport
    const delta = direction === 'next' ? amount : -amount;

    el.scrollBy({ left: delta, behavior: 'smooth' });
    // Re-check a little later to allow smooth scroll to update
    setTimeout(() => this.updateArrows(), 350);
  }

  onViewportScroll() {
    this.updateArrows();
  }

  trackByIndex(_i: number, _item: MovieItem) {
    return _i;
  }
}
