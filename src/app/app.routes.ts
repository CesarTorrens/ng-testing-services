import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { PicoPreviewComponent } from './components/pico-preview/pico-preview.component';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./components/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'pico-preview',
    loadComponent: () =>
      import('./components/pico-preview/pico-preview.component').then(
        (m) => m.PicoPreviewComponent
      ),
  },
];
