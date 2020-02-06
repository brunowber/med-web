import { HomePage, DisplayDataPage, Agenda, Campanha ,Fechamento } from './pages';

export default [
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/agenda',
    component: Agenda
  },
  {
    path: '/campanha',
    component: Campanha
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
