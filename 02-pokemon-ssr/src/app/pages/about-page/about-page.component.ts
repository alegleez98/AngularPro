import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-about',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
