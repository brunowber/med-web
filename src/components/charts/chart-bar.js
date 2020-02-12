import React from 'react';

import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
    Size,
    Export,
    CommonSeriesSettings,
    Tooltip,
    Format
} from 'devextreme-react/chart';

const month = [
    { value: 'jan', name: 'Janeiro' },
    { value: 'fev', name: 'Fevereiro' },
    { value: 'mar', name: 'Março' },
    { value: 'abr', name: 'Abril' },
    { value: 'mai', name: 'Maio' },
    { value: 'jun', name: 'Junho' },
    { value: 'jul', name: 'Julho' },
    { value: 'ago', name: 'Agosto' },
    { value: 'set', name: 'Setembro' },
    { value: 'out', name: 'Outubro' },
    { value: 'nov', name: 'Novembro' },
    { value: 'dez', name: 'Dezembro' },
]
const year = [
    { value: '2018', name: '2018' },
    { value: '2019', name: '2019' },
]

export default class ChartBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            argumentField: props.field,
            type: props.type,
            anos: props.ano
        };
        console.log(this.state.argumentField)
    }



    render() {
        return (
            <Chart
                title="Total de exames"
                dataSource={this.state.data}
                id="chart"
            >
                <Size
                    height={300}
                    width={600}
                />
                <CommonSeriesSettings
                    argumentField={this.state.argumentField}
                    valueField="total"
                    type={this.state.type}
                    hoverMode="allArgumentPoints"
                    selectionMode="allArgumentPoints"
                />
                {
                    year.map(function (item) {
                        return <Series key={item.value} valueField={item.value} name={item.name} />;
                    })
                }
                <ArgumentAxis
                    allowDecimals={false}
                    axisDivisionFactor={60}
                >
                    <Label>
                        <Format type="decimal" />
                    </Label>
                </ArgumentAxis>
                {/* <ArgumentAxis tickInterval={1}>
                    <Label format="decimal" />
                </ArgumentAxis> */}
                {/* <Series
                    valueField="jan"
                    name="Janeiro"
                    type={this.state.type}
                /> */}
                {/* <Series
                    valueField="fev"
                    type={this.state.type}
                    name="Fevereiro"
                />
                <Series
                    valueField="mar"
                    type={this.state.type}
                    name="Março"
                />
                <Series
                    valueField="abr"
                    type={this.state.type}
                    name="Abril"
                />
                <Series
                    valueField="mai"
                    type={this.state.type}
                    name="Maio"
                /> */}
                <Tooltip enabled={true} />
                <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                <Export
                    enabled={true}
                    icon="export"
                    text="Exportar"
                />
            </Chart>
        );
    }
}
