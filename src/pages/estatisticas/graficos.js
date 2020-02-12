import React, { useState } from 'react';
import 'devextreme/data/odata/store';
import { locale } from "devextreme/localization";
import config from "devextreme/core/config";
import { SelectBox } from 'devextreme-react';
import { ChartBar } from '../../components';
import Box, {
    Item
} from 'devextreme-react/box';

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
        tipo : "spline"
    }
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

const data_mes = [
    {
        mes :   "jan",
        ano : "2018",
        2018 : 652,
    },
    {
        mes : "fev",
        ano : "2018",
        2018 : 722,
    },
    {
        mes : "mar",
        ano : "2018",
        2018 : 872,
    },{
        mes : "abr",
        ano : "2018",
        2018 : 913,
    },{
        mes : "mai",
        ano : "2018",
        2018 : 896,
    },{
        mes : "jun",
        ano : "2018",
        2018 : 855,
    },{
        mes : "jul",
        ano : "2018",
        2018 : 1012,
    },{
        mes : "ago",
        ano : "2018",
        2018 : 1134,
    },{
        mes : "set",
        ano : "2018",
        2018 : 950,
    },{
        mes : "out",
        ano : "2018",
        2018 : 1100,
    },{
        mes : "nov",
        ano : "2018",
        2018 : 956,
    },{
        mes : "dez",
        ano : "2018",
        2018 : 734,
    },
    {
        mes : "jan",
        ano : "2019",
        2019 : 806,
    },
    {
        mes : "fev",
        ano : "2019",
        2019 : 911,
    },
    {
        mes : "mar",
        ano : "2019",
        2019 : 900,
    },{
        mes : "abr",
        ano : "2019",
        2019 : 1061,
    },{
        mes : "mai",
        ano : "2019",
        2019 : 1062,
    },{
        mes : "jun",
        ano : "2019",
        2019 : 881,
    },{
        mes : "jul",
        ano : "2019",
        2019 : 1064,
    },{
        mes : "ago",
        ano : "2019",
        2019 : 1134,
    },{
        mes : "set",
        ano : "2019",
        2019 : 1038,
    },{
        mes : "out",
        ano : "2019",
        2019 : 1154,
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
        if (e.value != null)
        {
            this.setState({
                component: <ChartBar key={e.value["tipo"]} data={data_mes} type={e.value["tipo"]} field="mes" />
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Box
                    direction="row"
                    width="20%"
                    height={75}>
                    <Item ratio={1}>
                        <SelectBox
                            displayExpr="name"
                            dataSource={graficos}
                            value={this.state.grafico}
                            onValueChanged={this.onGraficoChanged}
                            showClearButton={true}
                            searchEnabled = {true} 
                            placeholder = "Selecionar"
                        />
                    </Item>
                </Box>
                {this.state.component}
            </React.Fragment >
        );
    }
};
