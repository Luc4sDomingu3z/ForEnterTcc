import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { HomeDashboard } from '../home-dashboard/home-dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Navbar, HomeDashboard],
  templateUrl: './app-dashboard.html',
  styleUrl: './app-dashboard.scss'
})
export class AppDashboard {

}
