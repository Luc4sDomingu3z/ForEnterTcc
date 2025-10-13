import { Component } from '@angular/core';
import { Navbar } from '../../dashboard/navbar/navbar';
import {
  metaSimples,
  metaFatura,
  metaMaterial,
  MetaDinheiro,
  MetaFatura,
  MetaMaterial,
  MetaUnion,
} from '../../metas';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-consultas',
  imports: [Navbar, CurrencyPipe],
  templateUrl: './consultas.html',
  styleUrl: './consultas.scss',
})
export class Consultas {
  protected metasSimples = metaSimples;
  protected metasFaturas = metaFatura;
  protected metasMaterial = metaMaterial;

  protected Metas = new Array().concat(this.metasSimples, this.metasFaturas, this.metasMaterial);

  protected metaSelecionada: MetaUnion | null = null;

  protected detailDialog(e: Event) {
    const dialog: HTMLDialogElement | null = document.querySelector('dialog#detailDialog');
    const btnClose: HTMLButtonElement | null = document.querySelector('button#consulta-close-btn');

    if (dialog === null || btnClose === null) return;
    // Pegar dados
    const conteiner = (e.currentTarget as HTMLButtonElement).parentElement?.parentElement;
    if (!conteiner) return;

    const idElement: HTMLSpanElement = conteiner.firstChild as HTMLSpanElement;

    if (btnClose === e.currentTarget && btnClose.dataset['detaildialogToggle'] === 'on') {
      dialog.close();
      btnClose.dataset['detaildialogToggle'] = 'off';
      this.metaSelecionada = null;
    } else {
      dialog.showModal();
      this.selectMeta(idElement.id as string);
      btnClose.dataset['detaildialogToggle'] = 'on';
    }
  }

  protected selectMeta(id: string): MetaDinheiro | MetaMaterial | MetaFatura | null {
    if (id.length === 0) return null;
    const checkId = (
      arr: MetaDinheiro[] | MetaMaterial[] | MetaFatura[],
    ): { status: boolean; metaReal: MetaUnion | {} } => {
      let status = false;
      let metaReal = {};
      for (let meta of arr) {
        status = meta.id === id ? true : false;
        if (status) {
          metaReal = meta;
          break;
        }
      }
      return { status, metaReal };
    };

    const dados = [this.metasFaturas, this.metasMaterial, this.metasSimples];
    dados.forEach((arr) => {
      const checking = checkId(arr);
      if (checking.status === true) {
        this.metaSelecionada = checking.metaReal as MetaUnion;
      }
    });
    return null;
  }

  protected filterMetas(e: Event) {
    const input = e.target as HTMLInputElement;
    const container = document.querySelector('#metasContainer');

    const metas = container?.querySelectorAll('div');
    if (metas === undefined || metas.length === 0) return;

    metas.forEach((el) => {
      const idEl = el.querySelector('span');
      const txtEl = idEl?.nextElementSibling;
      if (
        idEl?.id.toLowerCase().includes(input.value.toLowerCase()) ||
        txtEl?.textContent.toLowerCase().includes(input.value.toLowerCase())
      ) {
        if (el.classList.contains('hidden!')) {
          el.classList.remove('hidden!');
        }
      } else {
        el.classList.add('hidden!');
      }
    });
  }
}
