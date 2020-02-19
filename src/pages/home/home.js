import React from 'react';
import './home.scss';
import './home.css';
import Grafico from './../estatisticas/graficos'
import { ChartBar } from '../../components';
import { dataGrafico } from '../../data';

export default () => (
  <React.Fragment>
    <div className="dashboard">
      <div className="linha">
        <div className="celula">
          <ChartBar type="bar" data={dataGrafico} field="mes" />
        </div>
        <div className="celula">
          <ChartBar type="line" data={dataGrafico} field="mes" />
        </div>
      </div>
      <div className="linha">
        <div className="celula">
          <ChartBar type="spline" data={dataGrafico} field="mes" />
        </div>
        <div className="celula">
          <ChartBar type="fullstackedbar" data={dataGrafico} field="mes" />
        </div>
      </div>
    </div>
  </React.Fragment>
);
