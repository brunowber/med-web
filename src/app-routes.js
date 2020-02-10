import { HomePage, Agenda, Campanha, ConsultaFinanceiro, Fechamento } from './pages';
import { ChartBar } from './components';

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
  },
  {
    path: '/barra',
    component: ChartBar
  }
  ];
