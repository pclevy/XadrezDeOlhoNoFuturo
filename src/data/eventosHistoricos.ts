export interface Evento {
  id: number;
  nome: string;
  imagem: string;
  descricaoCurta?: string;
  title?: string;
}

export const eventos: Evento[] = [
  {
    id: 0,
    nome: "Selecionar Evento abaixo",
    imagem: "images/Imagem_neutra.png",
  },
  {
    id: 1,
    nome: "I Torneio de Xadrez Relâmpago da UERJ",
    imagem: "images/I_Torneio_de_Xadrez_Relampago_da_Uerj_2010.png",
    descricaoCurta:
      "Cartaz do I Torneio de Xadrez Relâmpago da UERJ, em 14 de agosto de 2010.",
    title:
      "Cartaz do I Torneio de Xadrez Relâmpago da UERJ, realizado em 14 de agosto de 2010 na UERJ. Início às 13h, Sistema Suíço, oito categorias e premiação de R$500,00, troféus, medalhas e brindes. Árbitro: AE Paulo C. Levy.",
  },
  {
    id: 2,
    nome: "I Torneio de Xadrez Rápido da UERJ",
    imagem: "images/RapidoUERJ_2010.png",
    descricaoCurta:
      "Cartaz do I Torneio de Xadrez Rápido da UERJ em 7 de setembro de 2010.",
    title:
      "Cartaz do I Torneio de Xadrez Rápido da UERJ - 2010, realizado em 7 de setembro de 2010, na UERJ. Informa horário de início às 9h30, rodadas em sistema suíço, oito categorias e premiação de R$ 500, troféus, medalhas e brindes. Árbitro: AE Paulo C. Levy. Destaque também para a palestra 'Filosofia e Xadrez' às 17h.",
  },
  {
    id: 3,
    nome: "I Torneio Esquentando os Tabuleiros",
    imagem: "images/Esquentando_os_Tabuleiros.png",
    descricaoCurta:
      "Cartaz do I Torneio de Xadrez 'Esquentando os Tabuleiros' em 10 de outubro de 2009.",
    title:
      "Cartaz do I Torneio de Xadrez “Esquentando os Tabuleiros” em 10 de outubro de 2009, na Universidade do Estado do Rio de Janeiro (UERJ). Destaca categorias para estudantes, universitários e servidores, com premiação em troféus, medalhas e sorteios. Árbitro: AE Paulo C. Levy",
  },
  {
    id: 4,
    nome: "XIII Semana da Educacao",
    imagem: "images/XIII_Semana_da_Educacao.jpg",
    descricaoCurta:
      "Comissão de Organização da XIII Semana da Educacao. EDU/UERJ/2008, 18-21/11/2008",
    title:
      "Cartaz da XIII Semana de Educação, realizada na UERJ de 19 a 21 de novembro de 2008. Apresenta a Organização com três grupos: Comissão Executiva, Comissão Científica e Coordenação Geral.",
  },
  {
    id: 5,
    nome: "XIV Semana da Educacao",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
  },
  {
    id: 6,
    nome: "XV Semana da Educacao",
    imagem: "images/XV_Semana_da_Educacao.jpg",
  },
  {
    id: 7,
    nome: "XVI Semana da Educacao",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
  },
  {
    id: 8,
    nome: "XVII Semana da Educacao - (Fictício)",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício)",
    title: "... Semana da Educacao - (Fictício)",
  },
  {
    id: 9,
    nome: "XVIII Semana da Educacao - (Fictício)",
    imagem: "images/XV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício)",
    title: "... Semana da Educacao - (Fictício)",
  },
  {
    id: 10,
    nome: "XIX Semana da Educacao - (Fictício)",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício)",
    title: "... Semana da Educacao - (Fictício)",
  },
  {
    id: 11,
    nome: "XX Semana da Educacao - (Fictício)",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício)",
    title: "... Semana da Educacao - (Fictício)",
  },
  {
    id: 12,
    nome: "XXI Semana da Educacao - (Fictício)",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício/exemplo)",
    title: "... Semana da Educacao - (Fictício/exemplo)",
  },
  {
    id: 13,
    nome: "XXII Semana da Educacao - (Fictício)",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício)",
    title: "... Semana da Educacao - (Fictício)",
  },
  {
    id: 14,
    nome: "XXIII Semana da Educacao - (Fictício)",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício)",
    title: "... Semana da Educacao - (Fictício)",
  },
  {
    id: 15,
    nome: "XXIV Semana da Educacao - (Fictício)",
    imagem: "images/XIV_Semana_da_Educacao.jpg",
    descricaoCurta: "... Semana da Educacao - (Fictício/exemplo)",
    title: "... Semana da Educacao - (Fictício/exemplo)",
  },
  {
    id: 16,
    nome: "II Torneio de Xadrez Rápido da UERJ",
    imagem: "images/RapidoUERJ_2010.png",
    descricaoCurta: "... Semana da Educacao - (Fictício/exemplo)",
    title: "... Semana da Educacao - (Fictício/exemplo)",
  },
  {
    id: 17,
    nome: "II Torneio de Xadrez Relâmpago da UERJ",
    imagem: "images/I_Torneio_de_Xadrez_Relampago_da_Uerj_2010.png",
    descricaoCurta: "... Semana da Educacao - (Fictício/exemplo)",
    title: "... Semana da Educacao - (Fictício/exemplo)",
  },
];
