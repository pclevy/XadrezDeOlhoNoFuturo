export interface Evento {
  id: number;
  nome: string;
  imagem: string;
  descricaoCurta?: string;
  title?: string;
}

// alterado em 02/12/2025, 18:11

export const eventos: Evento[] = [
  {
    id: 0,
    nome: "Selecionar Evento abaixo",
    imagem: "images/Imagem_neutra.png",
  },
  {
    id: 5,
    nome: 'I Torneio "Xadrez de Olho no Futuro"',
    imagem: "xadrez.esfinge.org/images/FolderPetropolis251129.jpg",
    descricaoCurta: "Cartaz anuncia o I Torneio 'Xadrez de Olho no Futuro' ",
    title: "Torneios Escolares",
  },

  {
    id: 4,
    nome: "Campeonatos Estaduais Absolutos de Xadrez Blitz e Rápido – 2025",
    imagem:
      "https://fexerj.org.br/wp-content/uploads/2025/09/ESTBLZRAPABS2025_imgdest.jpg",
    descricaoCurta:
      "Cartaz anuncia os Campeonatos Estaduais Absolutos de Xadrez 'Blitz' e 'Rápido', FEXERJ, 19 de outubro de 2025, no Tijuca Tênis Clube, Rio de Janeiro. O 'Blitz' começa às 10h e o 'Rápido' às 14h20. Inscrição a R$ 40,00.\n Mais Informações em www.fexerj.org.br",
    title: "Campeonatos Estaduais Absolutos de Xadrez Blitz e Rápido – 2025",
  },
  {
    id: 3,
    nome: "Campeonatos Estaduais Femininos de Xadrez Blitz e Rápido – 2025",
    imagem:
      "https://fexerj.org.br/wp-content/uploads/2025/09/Imagem-do-WhatsApp-de-2025-09-26-as-19.03.53_723fbd77.jpg",
    descricaoCurta:
      "Cartaz anuncia os Campeonatos Estaduais Femininos de Xadrez 'Blitz' e 'Rápido', FEXERJ, 18 de outubro de 2025, no Tijuca Tênis Clube, Rio de Janeiro. O 'Blitz' começa às 10h e a 'Rápido' às 14h20. Inscrição a R$ 40,00.\n Mais Informações em www.fexerj.org.br",
    title: "Campeonatos Estaduais Femininos de Xadrez Blitz e Rápido – 2025",
  },
  {
    id: 2,
    nome: "Campeonato do Interior Absoluto 2025",
    imagem:
      "https://fexerj.org.br/wp-content/uploads/2025/09/interiorfexerj2025-capa.jpg",
    descricaoCurta:
      "Cartaz do Campeonato do Interior Absoluto 2025, 04 e 05 de outubro, Shopping Park Sul, Volta Redonda/RJ, Organização: FEXERJ\n Mais Informações em www.fexerj.org.br",
    title: "Campeonato do Interior Absoluto 2025",
  },

  {
    id: 1,
    nome: "Copa Brasil para Deficientes Visuais - Regional Centro 2025",
    imagem: "images/FBXDV-RegionalCentro2025.jpg",
    descricaoCurta:
      "Informações da Copa Brasil de Xadrez, da FBXDV, para Deficientes Visuais 2025 - Etapa 'Regional Centro', Cuiabá/MT, de a 5 de outubro/2025\n Mais Informações em www.fbxdv.org.br",
    title: "Campeonato do Interior Absoluto 2025",
  },
];
