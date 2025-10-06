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
      {
        id: 1,
        title: 'Privacidade',
        text: 'Todas as suas metas são <strong>privadas</strong>. Com exceções de pessoas e/ou grupos que você escolher para permitir a visualização das informações das metas. Com as ferramentas certas, você pode filtrar o que os participantes podem ou não enxergar quando a meta está compartilhada.',
      },
      {
        id: 2,
        title: 'Grupos & Chat',
        text: 'O projeto está direcionado a todo tipo de público, portanto, a comunicação é essencial nesses momentos que exigem bastante atenção. <strong>Grupos e chats</strong> são uma funcionalidade que permite essa interação. Convide usuários, como familiares, e os adicione às metas para organizar as dispesas em união.',
      },
      { id: 3, title: 'Administração', text: 'Você está no controle de tudo. Adicione e retire integrantes de um grupo quando quiser, verifique a datas planejadas, relatórios da entrada de valores de cada integrante, salve as informações na nuvem e no seu dispositivo. ' },
    ];

    for (let exp of explications) {
      if (Number(el.dataset['funcoesSecao']) === exp.id) {
        const text_area = document.getElementById('text_area');
        if (text_area !== null) {
          text_area.innerHTML = `
            <h2 class='text-3xl text-zinc-600 font-bold font-serif mb-4'>${exp.title}</h2>
            <p class='text-lg leading-8 indent-4 text-justify transition-all'>${exp.text}</p>
            `;
          text_area.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
          });
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

  goInfinite(e: Event) {
    console.log(e.currentTarget)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
