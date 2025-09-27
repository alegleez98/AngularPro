import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
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
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformServer(this.platform)) {
      this.title.setTitle('Pricing Page');
      this.meta.updateTag({ name: 'description', 'content': 'Este es mi Pricing Page' });
      this.meta.updateTag({ name: 'og:title', 'content': 'Pricing Page' });
      this.meta.updateTag({ name: 'keywords', 'content': 'Alejandro,Curso,Angular,Pro,PRO' });
    }
    if (isPlatformBrowser(this.platform)) {
      document.title = 'Pricing Page';
    }
  }
}
