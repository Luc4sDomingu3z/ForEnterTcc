import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {

  constructor(private authService: Auth) { }
  protected user: { user: string, email: string } | null = null
  ngOnInit(): void {
    this.user = this.authService.pegarUser()
  }
}
