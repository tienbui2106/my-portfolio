import { AfterViewInit, Component, signal } from '@angular/core';
import { NavBar } from './nav-bar/nav-bar';
import { Home } from './home/home';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Observer } from 'tailwindcss-intersect';

@Component({
  selector: 'app-root',
  imports: [NavBar, Home, Experience, Contact, About, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('my-portfolio');

  constructor() {}

  scrollToSection(selectedSection: string): void {
    const section = document.getElementById(selectedSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngAfterViewInit(): void {
    Observer.start();
  }
}
