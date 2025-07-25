import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  sections = [ "about", "skills", "experience", "contact" ];
  showMobileMenu = signal(false);
  sectionSelect = output<string>();


  toggleMenu() {
    this.showMobileMenu.update((current) => !current);
  }

  selectSection(section: string) {
    this.sectionSelect.emit(section);
    this.showMobileMenu.set(false);
  }
}
