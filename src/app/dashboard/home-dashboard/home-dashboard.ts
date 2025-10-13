import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { metaFatura, metaMaterial, metaSimples, MetaUnion } from '../../metas';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  imports: [Navbar, RouterLink],
  templateUrl: './home-dashboard.html',
  styleUrl: './home-dashboard.scss'
})
export class HomeDashboard {
  protected metasSimples = metaSimples;
  protected metasFaturas = metaFatura;
  protected metasMaterial = metaMaterial;

  protected Metas: MetaUnion[] = new Array().concat(this.metasSimples, this.metasFaturas, this.metasMaterial);

  protected metaSelecionada: MetaUnion | null = null;

  /**
   *
   * @param tipo - 0: all; 1: Dinheiro; 2: Fatura; 3: Material
   * @returns
   */
  protected totalMetas(tipo: 0 | 1 | 2 | 3 = 0): number {
    if (tipo === 1) {
      return this.metasSimples.length
    }

    if (tipo === 2) {
      return this.metasFaturas.length
    }

    if (tipo === 3) {
      return this.metasMaterial.length
    }

    if (this.Metas.length && tipo === 0) return this.Metas.length
    return 0
  }


  protected maiorProgresso() {
    if (this.Metas.length === 0) return;

    let progresso: { id: string, pr: number }[] = []
    for (let meta of this.Metas)
      progresso.push({ id: meta.id, pr: meta.progresso })
    let maiorProgresso = progresso.sort((a, b) => b.pr - a.pr)
    return maiorProgresso
  }
}
