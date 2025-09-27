import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-contact',
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent { }
