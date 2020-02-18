import React from 'react';
import './home.scss';
import './home.css';
import Grafico from './../estatisticas/graficos'

export default () => (
  <React.Fragment>
    <div className="dashboard">
        <div className="linha">
          <div className="celula">
            <Grafico default="Bar" searchVisible='False'/>
          </div>
          <div className="celula">
            <Grafico default="line" searchVisible='True'/>
          </div>
        </div>
        <div className="linha">
          <div className="celula">
            <Grafico default="spline" searchVisible='False'/>
          </div>
          <div className="celula">
            <Grafico default="Bar" searchVisible='False'/>
          </div>
        </div>
    </div>
  </React.Fragment>
);
