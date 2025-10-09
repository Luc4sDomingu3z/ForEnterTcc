import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  constructor(private authService: Auth) { }

  protected user: { user: string, email: string } | null = null
  ngOnInit(): void {
    this.user = this.authService.pegarUser()
  }

  /**
   * Toggle mobile menu
   */
  headerNavToggle(e: PointerEvent) {
    if (e.currentTarget === null || e.currentTarget instanceof HTMLButtonElement === false) return;

    const nav = e.currentTarget.parentElement;
    if (nav === null) return;

    const ul = nav.querySelector('ul');
    const btn = e.currentTarget;
    const btnDataSetArray = Object.keys(btn.dataset);
    if (btnDataSetArray.length === 0 || btnDataSetArray.includes('navToggled') === false)
      btn.dataset['navToggled'] = 'false';

    console.log('verificando');
    if (btn.dataset['navToggled'] == 'false') {
      btn.dataset['navToggled'] = 'true';
      ul?.classList.add('opacity-100');
      ul?.classList.remove('opacity-0');
    } else {
      btn.dataset['navToggled'] = 'false';
      ul?.classList.remove('opacity-100');
      ul?.classList.add('opacity-0');
    }

    const links: NodeListOf<HTMLAnchorElement> | undefined = ul?.querySelectorAll('a');
    if (links !== undefined) {
      links.forEach((a) =>
        a.addEventListener('click', (e) => {
          this.closeLinkedMenu(a, btn);
        }),
      );
    }
  }

  /**
   * Fecha menu pelo link
   */
  closeLinkedMenu(target: HTMLAnchorElement, btn: HTMLButtonElement) {
    if (target === null || btn === null) return;
    const ul = target.parentElement?.parentElement as HTMLUListElement;
    if (ul.classList.contains('opacity-100')) {
      ul.classList.remove('opacity-100');
      ul.classList.add('opacity-0');
      btn.dataset['navToggled'] = 'false'
    }
  }
}
