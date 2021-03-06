export const navigation = [
  {
    text: "Home",
    path: "/home",
    icon: "home"
  },
  {
    text: "Financeiro",
    icon: "money",
    items: [
      {
        text: "Consulta",
        path: "/financeiro/consulta"
      },
      {
        text: "Cadastra",
        path: "/financeiro/cadastra"
      }
    ]
  },
  {
    text: "Odontologia",
    icon: "folder",
    items: [
      {
        text: "Agenda",
        path: "/odontologia/agenda"
      },
      {
        text: "Campanha",
        path: "/odontologia/campanha"
      },
      {
        text: "Fechamento",
        path: "/Fechamento"
      },
    ]
  },
  {
    text: "Estatísticas",
    icon: "chart",
    items: [
      {
        text: "Gráficos",
        path: "/barra"
      }
    ]
  }
  ];
