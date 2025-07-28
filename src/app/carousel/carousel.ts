import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  input,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';

export interface MediaItem {
  type: 'image';
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  media = input<MediaItem[]>([]);
  autoPlay = input<boolean>(true);
  autoPlayInterval = input(5000);

  public currentIndex = signal(0);
  private intervalId?: number;

  ngOnInit(): void {
    // Start the autoplay slideshow if enabled
    if (this.autoPlay() && this.media().length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed to prevent memory leaks
    this.clearAutoPlay();
  }

  /**
   * Starts the automatic slideshow timer.
   */
  startAutoPlay(): void {
    this.clearAutoPlay(); // Ensure no multiple intervals are running
    this.intervalId = window.setInterval(() => {
      this.next();
    }, this.autoPlayInterval());
  }

  /**
   * Clears the automatic slideshow timer.
   */
  clearAutoPlay(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  /**
   * Navigates to the next slide in the carousel.
   */
  next(): void {
    this.currentIndex.update((i) => (i + 1) % this.media().length);
  }

  /**
   * Navigates to the previous slide in the carousel.
   */
  prev(): void {
    this.currentIndex.update(
      (i) => (i - 1 + this.media().length) % this.media().length,
    );
  }

  /**
   * Navigates to a specific slide by its index.
   * @param index The index of the slide to go to.
   */
  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
