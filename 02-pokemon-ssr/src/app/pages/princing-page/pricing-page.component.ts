import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPageComponent {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'description', 'content': 'Este es mi Pricing Page' });
    this.meta.updateTag({ name: 'og:title', 'content': 'Pricing Page' });
    this.meta.updateTag({ name: 'keywords', 'content': 'Alejandro,Curso,Angular,Pro,PRO' });
  }
}
