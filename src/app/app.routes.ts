import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AppDashboard } from './dashboard/app-dashboard/app-dashboard';
import { HomeDashboard } from './dashboard/home-dashboard/home-dashboard';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Entrar na conta',
    component: Login,
  },
  {
    path: '',
    title: 'Página principal',
    component: Home,
  },
  {
    path: 'dashboard',
    title: 'Dashboard Inicio',
    component: AppDashboard,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        outlet: 'sec'
      },
      {
        path: 'home',
        title: 'Dashboar Pagina inicial',
        component: HomeDashboard,
        outlet: 'sec'
      },
    ],
  },
];
