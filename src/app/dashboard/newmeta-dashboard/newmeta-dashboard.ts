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
}
