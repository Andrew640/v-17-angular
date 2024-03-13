import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@app/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'listings',
    loadComponent: () =>
      import('@app/listings/listings.component').then(
        (mod) => mod.ListingsComponent
      ),
  },
  {
    path: 'listings/:id',
    loadComponent: () =>
      import('@app/listing/listing.component').then(
        (mod) => mod.ListingComponent
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
