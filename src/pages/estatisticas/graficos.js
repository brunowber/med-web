import React, { useState } from 'react';
import 'devextreme/data/odata/store';
import { locale } from "devextreme/localization";
import config from "devextreme/core/config";
import { SelectBox } from 'devextreme-react';
import { ChartBar } from '../../components';

import Box, {
    Item
} from 'devextreme-react/box';
import { dataGrafico } from '../../data';

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
    {
        id: 3,
        name: "Spline",
        tipo: "spline"
    },
    {
        id: 4,
        name: "Stacked",
        tipo: "fullstackedbar"
    }
]

export default class Graficos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grafico: null,
            component: null
        };
        locale(navigator.language);
        config({ defaultCurrency: 'BRL' });
        this.onGraficoChanged = this.onGraficoChanged.bind(this);
    }

    onGraficoChanged(e) {
        this.setState({
            grafico: e.value,
        });
        if (e.value != null) {
            this.setState({
                component: <ChartBar key={e.value["tipo"]} data={dataGrafico} type={e.value["tipo"]} field="mes" />
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Box
                    direction="row"
                    width="15%"
                    height={75}>
                    <Item ratio={1} >

                        <SelectBox
                            dataSource={graficos}
                            displayExpr="name"
                            value={this.state.grafico}
                            onValueChanged={this.onGraficoChanged}
                            showClearButton={true}

                            searchEnabled={true}
                            placeholder="Selecionar"
                        />
                    </Item>
                </Box>
                {this.state.component}
            </React.Fragment >
        );
    }
};
