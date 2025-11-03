export interface Evento {
  id: number;
  nome: string;
  imagem: string;
  descricaoCurta?: string;
  title?: string;
  link?: string;
  sigla?: string;
}

// alterado em 27/09/2025, 19:14

export const eventos: Evento[] = [
  {
    id: 0,
    nome: "Desafio do Dia",
    imagem: "images/Imagem_neutra.png",
  },
  {
    id: 1,
    nome: "Federação Brasileira de Xadrez para Deficientes Visuais",
    imagem: "images/Logo_FBXDV.png",
    descricaoCurta:
      "Link para o 'site' da FBXDV (Federação Brasileira de Xadrez para Deficientes Visuais",
    title:
      "Link para o 'site' da FBXDV (Federação Brasileira de Xadrez para Deficientes Visuais",
    link: "http://www.fbxdv.org.br",
    sigla: "FBXDV",
  },
  {
    id: 2,
    nome: "Xadrez Escolar de Petrópolis",
    imagem: "images/XadrezEscolarPetropolis.jpg",
    descricaoCurta: "'Instagram' do Xadrez Escolar de Petrópolis",
    title: "'Instagram' do Xadrez Escolar de Petrópolis",
    link: "https://www.instagram.com/xadrezescolarpetropolis",
    sigla: "Xadrez Escolar de Petrópolis",
  },
  {
    id: 3,
    nome: "Federação de Xadrez do Estado do Rio de Janeiro",
    imagem:
      "https://fexerj.org.br/wp-content/uploads/2024/01/LogotipoFEXERJ-100x100.png",
    descricaoCurta: "Federação de Xadrez do Estado do Rio de Janeiro",
    title: "Federação de Xadrez do Estado do Rio de Janeiro",
    link: "https://fexerj.org.br",
    sigla: "FEXERJ",
  },

  {
    id: 4,
    nome: "Confederação Brasileira de Xadrez",
    imagem: "https://www.cbx.org.br/images/header1.jpg",
    descricaoCurta: "Confederação Brasileira de Xadrez",
    title: "Confederação Brasileira de Xadrez",
    link: "https://www.cbx.org.br",
    sigla: "CBX",
  },

  {
    id: 5,
    nome: "International Chess Federation",
    imagem: "https://www.fide.com/img/logo1.png",
    descricaoCurta: "Fédération internationale des échecs",
    title: "Fédération internationale des échecs",

    link: "https://www.fide.org",
    sigla: "FIDE",
  },
];
