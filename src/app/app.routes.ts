import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'plan',
    loadComponent: () => import('./features/trip-planner/trip-planner').then((m) => m.TripPlanner),
  },
];
