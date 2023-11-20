output.mySimulations = {
  lblTitleScreen: {
    text: "Minhas Simulações",
    id: "titleLabel"
  },
  lblSubTitleScreen: {
    text: "Confira as simulações do Parcele Fácil que você já fez e escolha como pagar a entrada para finalizar a contratação",
    id: "messageLabel"
  },
  lblTitleCard: {
    text: "Simulação",
    id: "titleLabelCard"
  },
  lblSubTitleCard: {
    text: date => `Entrada com vencimento em ${date}`,
    id: "subtitleLabelCard"
  },
  lblValueCard: {
    text: "Valor:",
    id: "valueTitleLabelCard"
  },
  lblValueMonetaryCard: {
    text:  value => `R$ ${value}`,
    id: "valueMonetaryLabelCard"
  },
  btnCard: {
    text: "Detalhes da simulação",
    id: "actionButton"
  },
  btnloadMoreSimulations: {
    text: "Carregar mais simulações",
    id: "loadMoreButton"
  }
}
