import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { HomeDashboard } from './dashboard/home-dashboard/home-dashboard';
import { NewmetaDashboard } from './dashboard/newmeta-dashboard/newmeta-dashboard';
import { authGuard } from './guard/auth-guard';
import { Consultas } from './components/consultas/consultas';

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
    component: HomeDashboard,
    canActivate: [authGuard]
  },
  {
    path: 'dashboard/home',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard/new',
    title: 'Nova meta',
    component: NewmetaDashboard,
  },
  {
    path: 'dashboard/see',
    title: 'Ver as metas',
    component: Consultas
  }
];
