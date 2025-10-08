import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private user: string = 'lucas ADM';
  private email: string = 'admin@gmail.com'
  private senha: string = '123456'

  constructor(private router: Router) { }

  // Vamos jogar no SessionStorage
  protected AUTH_USER: string = 'auth_user'

  login(usuario: { email: string, senha: string }) {
    console.log(`Usuario ${usuario.email}`)
    if (!usuario.email.includes(this.email)) {
      return 'E-mail incorreto.'
    }

    if (!usuario.senha.includes(this.senha)) {
      return 'Senha incorreta';
    }

    sessionStorage.setItem(this.AUTH_USER, JSON.stringify({
      user: this.user,
      email: this.email
    }))
    return true
  }

  logout() {
    sessionStorage.removeItem(this.AUTH_USER);
    this.router.navigate(['/login'])
  }

  isLogged(): boolean {
    const usuario = sessionStorage.getItem(this.AUTH_USER)
    console.log(usuario)
    return usuario ? true : false
  }

  pegarUser(): { user: string, email: string } | null {
    const logado = this.isLogged()
    const usuario = sessionStorage.getItem('auth_user')

    if (usuario === null) return null;
    return JSON.parse(usuario)
  }
}
