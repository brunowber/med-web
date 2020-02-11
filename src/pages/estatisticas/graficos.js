import React, { useState } from 'react';
import 'devextreme/data/odata/store';
import { locale } from "devextreme/localization";
import config from "devextreme/core/config";
import { SelectBox } from 'devextreme-react';
import { ChartBar } from '../../components';

const graficos = [
    {
        id: 1,
        name: 'Barra',
        tipo: 'bar'
    },
    {
        id: 2,
        name: 'Linha',
        tipo: 'line'
    },
]

const data = [
    {
        ano: 2019,
        jan: 652,
        fev: 722,
        mar: 872,
        abr: 100,
        mai: 122
    },
    {
        ano: 2020,
        jan: 700,
        fev: 1200,
        mar: 800
    },
    ,
    {
        ano: 2021,
        jan: 120,
        fev: 345,
        mar: 763
    },
]

export default class Graficos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grafico: graficos[0],
            component : null
        };
        locale(navigator.language);
        config({ defaultCurrency: 'BRL' });
        this.onGraficoChanged = this.onGraficoChanged.bind(this);
        console.log(this.state.grafico)
    }

    onGraficoChanged(e) {
        console.log(e)
        this.setState({
            grafico: e.value,
            component : <ChartBar key={e.value["tipo"]} data = {data} type = {e.value["tipo"]} field = "ano"/>
        });
    }

    render() {
        return (
            <React.Fragment >
                <SelectBox
                    displayExpr="name"
                    dataSource={graficos}
                    value={this.state.grafico}
                    onValueChanged={this.onGraficoChanged}
                />
                {this.state.component}
            </React.Fragment >
        );
    }
};
