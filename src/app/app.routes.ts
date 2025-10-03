import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { HomeDashboard } from './dashboard/home-dashboard/home-dashboard';

export const routes: Routes = [
  {
    path: "login",
    title: "Entrar na conta",
    component: Login
  },
  {
    path: "",
    title: "Página principal",
    component: Home
  },
  {
    path: "dashboard",
    title: "App",
    component: HomeDashboard
  }
];
