import { Component, input, NgModule, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private authService: Auth, private router: Router) { }
  // Usuario ainda não definido

  usuario: { email: string, senha: '' } = {
    email: '',
    senha: ''
  }
  mensagemError: string | null = null
  hide = signal(true)

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide())
    event.stopPropagation()
  }

  login() {
    console.log(this.usuario)
    // Limpar erros anteriores
    this.mensagemError = null
    if (this.authService.login(this.usuario) === true) {
      this.router.navigate(['/dashboard'])
    }
  }
}
