import { HomePage, Agenda, Campanha, ConsultaFinanceiro, Fechamento } from './pages';

export default [
  {
    path: '/financeiro/cadastra',
    // component: Financeiro
  },
  {
    path: '/odontologia/agenda',
    component: Agenda
  },
  {
    path: '/odontologia/campanha',
    component: Campanha
  },
  {
    path: '/financeiro/consulta',
    component: ConsultaFinanceiro
  },
  {
    path: '/fechamento',
    component: Fechamento
  },
  {
    path: '/home',
    component: HomePage
  }
  ];
