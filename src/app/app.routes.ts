import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoveComponent } from './pages/love/love.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'love',
    component: LoveComponent,
  },
];
