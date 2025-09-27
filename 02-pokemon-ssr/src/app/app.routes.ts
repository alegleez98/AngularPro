import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PricingPageComponent } from './pages/princing-page/pricing-page.component';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => AboutPageComponent
  },
  {
    path: 'contact',
    loadComponent: () => ContactPageComponent,
  },
  {
    path: 'pricing',
    loadComponent: () => PricingPageComponent
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];
