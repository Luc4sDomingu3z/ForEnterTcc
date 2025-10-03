import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Imagens {
  imagens = {
    mustang: 'imgs/mustang.jpg',
    mockup: 'imgs/mockup-removebg-preview.png'
  }

  printarImagem(chaveImg: string) {
    if (!chaveImg.length) return;

    console.log(chaveImg)
  }
}
