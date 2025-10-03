import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Imagens } from '../../services/imagens';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  constructor(private imagemService: Imagens) { }

  privacyDialogEvent(e: PointerEvent) {
    e.preventDefault()
    const dialog = document.getElementById('privacyDialog')
    if (dialog === null || dialog instanceof HTMLDialogElement === false) return;

    const button: HTMLButtonElement | null = e.currentTarget as HTMLButtonElement
    if (button instanceof HTMLButtonElement === null) return

    const dataValue = Object.values(button.dataset)
    if (!dataValue.length) return;

    if (dataValue[0]?.includes('off'))
      dialog.close()

    if (dataValue[0]?.includes('on'))
      (dialog as HTMLDialogElement).showModal()

    if (dialog.open)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'auto'
  }
}
