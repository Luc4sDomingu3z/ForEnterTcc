export type MetaDinheiro = {
  tipo: 'Dinheiro';
  id: string;
  name: string;
  valor: number;
  progresso: number;
  imgUrl?: string;
};

export type MetaMaterial = {
  tipo: 'Material';
  id: string;
  name: string;
  itemName: string;
  valor: number;
  parcelas: number;
  progresso: number;
  imgUrl?: string;
};

export type MetaFatura = {
  tipo: 'Fatura';
  id: string;
  name: string;
  valor: number;
  vencimento: string;
  dataInicio: string;
  progresso: number;
};

export type MetaUnion = MetaDinheiro | MetaMaterial | MetaFatura;

function dateFormat(dat: Date): string {
  return dat.toLocaleDateString('pt-br');
}

export const metaSimples: MetaDinheiro[] = [
  {
    tipo: 'Dinheiro',
    id: '0001',
    name: 'Mercado do mês',
    valor: 1099.99,
    progresso: 50,
  },
  {
    id: '0002',
    name: 'Meta da semana',
    valor: 2300.8,
    progresso: 20,
    tipo: 'Dinheiro',
  },
  {
    id: '0003',
    name: 'Vaquinha',
    valor: 1200,
    progresso: 95,
    tipo: 'Dinheiro',
  },
  {
    id: '0004',
    name: 'Tinta para o quarto principal',
    valor: 120.4,
    progresso: 21,
    tipo: 'Dinheiro',
  },
];

export const metaMaterial: MetaMaterial[] = [
  {
    id: '0005',
    name: 'Geladeira nova',
    itemName: 'Geladeira Consul',
    valor: 2100,
    parcelas: 5,
    progresso: 12,
    tipo: 'Material',
  },
  {
    id: '0006',
    name: 'Fogão novo',
    itemName: 'Fogão Brastemp Elétrico',
    valor: 2300.9,
    parcelas: 7,
    progresso: 43,
    tipo: 'Material',
  },
  {
    id: '0007',
    name: 'Microondas simples',
    itemName: 'Panasonic 21 Litros',
    valor: 760.88,
    parcelas: 8,
    progresso: 98,
    tipo: 'Material',
  },
];

export const metaFatura: MetaFatura[] = [
  {
    id: '0008',
    name: 'Faculdade',
    valor: 320,
    dataInicio: dateFormat(new Date()),
    vencimento: dateFormat(new Date(2025, 10, 15)),
    progresso: 77,
    tipo: 'Fatura',
  },
  {
    id: '0009',
    name: 'Internet Ponto 1',
    valor: 89.9,
    dataInicio: dateFormat(new Date()),
    vencimento: dateFormat(new Date(2025, 10, 17)),
    progresso: 21,
    tipo: 'Fatura',
  },
];
