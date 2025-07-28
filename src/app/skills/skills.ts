import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  cardAnimationClasses = 'invisible intersect:visible intersect:motion-preset-blur-up-md intersect:motion-duration-800 intersect:motion-ease-out';
}
