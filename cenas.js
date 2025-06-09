const cenas = {
  A_Posto: {
    texto: "Você está em um posto no meio do nada. O que faz?",
    opcoes: [
      { texto: "Desligar e trancar o carro", proxima: "CarroNaoLiga" },
      { texto: "Deixar o carro ligado", proxima: "TudoCerto" },
      { texto: "Falar com o frentista", proxima: "FalaComFrentista" },
    ],
  },
  CarroNaoLiga: {
    texto: "Você foi ao banheiro, mas agora o Peugeot não quer ligar...",
    opcoes: [
      { texto: "Pegar no tranco?", proxima: "A_Posto_SemFrentista" },
      { texto: "Desistir", proxima: "FimDeJogo" },
    ],
  },
  TudoCerto: {
    texto:
      "Você foi no banheiro e deu tudo certo. Ninguém jamais roubaria esse carro.",
    opcoes: [],
  },
  FalaComFrentista: {
    texto: "Fala guerreiro, tá indo pra onde?",
    opcoes: [
      { texto: "São Paulo", proxima: "FrentistaDuvidei" },
      { texto: "Não te interessa", proxima: "FrentistaRetrovisor" },
      { texto: "[Informação oculta]", proxima: "FrentistaGalao" },
    ],
  },
  FrentistaDuvidei: {
    texto: "Tu acha que vai chegar com esse carro? Eu duvido.",
    proxima: "A_Posto_SemFrentista",
  },
  FrentistaRetrovisor: {
    texto: "Pra que isso... o frentista chuta seu retrovisor. (-1 retrovisor)",
    proxima: "A_Posto_SemFrentista",
  },
  FrentistaGalao: {
    texto: "Entendido, senhor. Leve este galão de água com você. (+1 galão)",
    proxima: "A_Posto_SemFrentista",
  },
  A_Posto_SemFrentista: {
    texto: "Você está de volta ao posto (o frentista sumiu).",
    opcoes: [
      { texto: "Desligar e trancar o carro", proxima: "CarroNaoLiga" },
      { texto: "Deixar o carro ligado", proxima: "TudoCerto" },
    ],
  },
  FimDeJogo: {
    texto: "Você desistiu. Fim de jogo.",
    opcoes: [],
  },
};

export default cenas;
