import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  /**
   * Secao de explicaoes
   */
  selectFuncao(e: PointerEvent): void {
    // Se nao for o elemento correto
    if (e.currentTarget instanceof HTMLDivElement === false) return;

    const el: HTMLDivElement = e.currentTarget as HTMLDivElement;

    // Se nao tiver atributo data
    if (el.dataset['funcoesSecao'] === undefined) return;

    const explications: { id: number; title: string; text: string }[] = [
      {
        id: 0,
        title: 'Progressões de metas',
        text: 'Esteja ciente a todo tempo sobre o progresso de sua meta. Com auxílio de calendários interativos, você pode criar estimativas manualmente ou deixe que façamos isso por você.',
      },
      { id: 1, title: 'Privacidade', text: 'Texto' },
      { id: 2, title: 'Grupos & Chat', text: 'Texto 2' },
      { id: 3, title: 'Administração', text: 'Text 3' },
    ];

    for (let exp of explications) {
      if (Number(el.dataset['funcoesSecao']) === exp.id) {
        const text_area = document.getElementById('text_area');
        if (text_area !== null) {
          text_area.innerHTML = `
            <h2 class='text-3xl text-zinc-600 font-bold font-serif mb-4'>${exp.title}</h2>
            <p class='text-lg leading-8 indent-4 text-justify transition-all'>${exp.text}</p>
            `;
          window.scrollTo({top: text_area.scrollHeight + 200})
        }
      }
    }

    const els = document.querySelectorAll(`[data-funcoes-secao]`);
    if (els.length === 0) return;

    el.classList.add('border-green-500!');
    for (let otherEl of els) {
      const otherDataset = otherEl.getAttribute('data-funcoes-secao');
      if (
        otherEl.classList.contains('border-green-500!') &&
        Number(otherDataset) !== Number(el.dataset['funcoesSecao'])
      ) {
        otherEl.classList.remove('border-green-500!');
      }
    }
  }
}
