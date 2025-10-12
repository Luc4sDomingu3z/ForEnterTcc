import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-newmeta-dashboard',
  imports: [Navbar],
  templateUrl: './newmeta-dashboard.html',
  styleUrl: './newmeta-dashboard.scss'
})
export class NewmetaDashboard {
  protected preventSubmit(e: SubmitEvent) {
    e.preventDefault()
  }

  protected formatInputCash(input: string, element: Pick<Event, 'currentTarget'>) {
    console.log(input)
    const regex = /^[0-9]+(\,[0-9]+)?$/
    if (element === null) return;

    let id = (element.currentTarget as HTMLInputElement).id
    const el: HTMLInputElement | null = document.querySelector(`input#${id}`)
    if (el === null) return;

    if (!regex.test(input)) {
      const lastStr: string | undefined = el.value.at(el.value.length - 1)
      if (lastStr !== undefined) {
        el.value = el.value.replace(lastStr, '')
      }
    }
  }

  /**
   *  Ativar/Desativar conteiner de ajuda sobre criacao de meta.
   * @param e
   * @returns
   */
  showTutor(e: Event) {
    if (e.currentTarget === null) return;

    const btn = e.currentTarget as HTMLButtonElement

    const context: HTMLDivElement | null = btn.parentElement?.parentElement as HTMLDivElement

    if (context === null) return;
    const css: string[] = ["max-h-[40px]", "overflow-hidden!"]

    if (context.classList.contains('max-h-150')) {
      context.classList.add(...css)
      context.classList.remove('max-h-150')
    } else {
      context.classList.remove(...css)
      context.classList.add('max-h-150')
    }
  }


  /**
   * Habilitar campos respectivos da escolha do tipo de meta
   * @param {Event} e
   * @returns
   */
  protected tipoMeta(e: Event) {
    if (e.currentTarget === null && e.target === null) return;
    const label: HTMLLabelElement = e.currentTarget as HTMLLabelElement
    const input: HTMLInputElement = e.target as HTMLInputElement

    const field = (id: string): null | void => {
      const el = document.querySelector(`fieldset#field-${id}`) as HTMLFieldSetElement;
      if (!el) return;
      el.classList.contains('hidden!') ? el.classList.remove('hidden!') : el.classList.add('hidden!')
      el.disabled = false
      const fields = document.querySelectorAll('fieldset')
      fields.forEach((fl) => {
        if (fl.id.includes(id) === false && fl.id.includes('field')) {
          if (!fl.classList.contains('hidden!')) {
            fl.classList.add('hidden!')
            fl.disabled = true
          }
        }
      })
    }

    if (input.checked)
      field(input?.value)
  }
}
