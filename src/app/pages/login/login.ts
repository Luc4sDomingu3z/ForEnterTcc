import { Component, input, NgModule, OnInit, signal } from '@angular/core';
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

  usuario: { email: string, senha: string, privacidade: boolean } = {
    email: '',
    senha: '',
    privacidade: false
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

    const tentativa = this.authService.login(this.usuario)
    if (tentativa === true) {
      this.router.navigate(['/dashboard'])
    } else {
      this.mensagemError = tentativa
    }
  }


  privacyDialogEvent(e: PointerEvent) {
    e.preventDefault()
    const dialog = document.getElementById('privacyDialog')
    if (dialog === null || dialog instanceof HTMLDialogElement === false) return;


    (dialog as HTMLDialogElement).showModal()

    if (dialog.open)
      document.body.style.overflow = 'hidden'
    else {
      document.body.style.overflow = 'auto'
      dialog.close()
    }
  }
}
