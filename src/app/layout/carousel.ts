import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class carousel {
  // hoveredIndex: number | null = null;

  // items = [
  //   { title: 'Griselda', img: 'bcs.jpg' },
  //   { title: 'Blood & Water', img: 'assets/blood-water.jpg' },
  //   { title: 'One Day', img: 'assets/one-day.jpg' },
  //   { title: 'Spider-Man', img: 'assets/spiderman.jpg' },
  //   { title: 'Meg 2', img: 'assets/meg2.jpg' },
  //   // ...más
  // ];

  // setHover(i: number | null) {
  //   this.hoveredIndex = i;
  // }

  // scroll(container: HTMLElement, dir: 'left' | 'right') {
  //   const delta = dir === 'left' ? -container.clientWidth * 0.9 : container.clientWidth * 0.9;
  //   container.scrollBy({ left: delta, behavior: 'smooth' });
  // }
}
