import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'categories',
    loadComponent: () => import('./list-categories/list-categories.component').then((m) => m.ListCategoriesComponent),
  },
  {
    path: 'products/:category',
    loadComponent: () => import('./list-products/list-products.component').then((m) => m.ListProductsComponent),
  },
  {
    path: 'product-detail/:id',
    loadComponent: () => import('./detail-products/detail-products.component').then((m) => m.DetailProductsComponent),
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
];
