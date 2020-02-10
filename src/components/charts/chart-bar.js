import React from 'react';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

import Chart, {
    ArgumentAxis,
    ValueAxis,
    Label,
    Legend,
    Series,
    Size,
    Export,
    LoadingIndicator,
    CommonSeriesSettings,
    Format
} from 'devextreme-react/chart';

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

function customizeSeries(valueFromNameField) {
    return valueFromNameField === 2009 ? { type: 'line', label: { visible: true }, color: '#ff3f7a' } : {};
}


function RenderSeries(props) {
    // console.log(props)
    let series = []
    props.data.map((a, b) => {
        // console.log("a")
        // console.log(a)
        // console.log("b")
        // console.log(b)
        // console.log("-----------------")
    })
    let a = <Series valueField="jan" type="bar" name="Março" />
    series.push(<Series valueField="jan" type="bar" name="Janeiro" />)
    series.push(<Series valueField="fev" type="bar" name="Fevereiro" />)
    series.push(<Series valueField="mar" type="bar" name="Março" />)
    // console.log(<Series value    Field="mar" type="bar" name="Março" />)
    console.log(series)
    return setTimeout(() => { return (series); }, 2000);

    // return <div> aaaa </div>
}


export default class ChartBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            argumentField: "ano",
        };
    }
    render() {
        return (
            <Chart
                title="Total de exames"
                dataSource={this.state.data}
                id="chart"
            // width = {200}
            >
                <Size
                    height={300}
                    width={600}
                />
                <CommonSeriesSettings
                    argumentField={this.state.argumentField}
                    type="bar"
                    hoverMode="allArgumentPoints"
                    selectionMode="allArgumentPoints"
                >
                    <Label visible={true}>
                        <Format type="fixedPoint" precision={0} />
                    </Label>
                </CommonSeriesSettings>

                <ArgumentAxis tickInterval={1}>
                    <Label format="decimal" />
                </ArgumentAxis>
                {/* <RenderSeries data={this.state.data}/>
                 */}
                {/* {this.state.data.slice(0, 1).map((a, b) => {
                    console.log(a)
                    console.log(Object.keys(a)[1]);
                    for (let i = 1; i < a.length; i++) {
                        console.log(Object.keys(a)[i])
                        return (<Series valueField={Object.keys(a)[i]} name="Janeiro" type="bar" />)
                    }
                })} */}
                <Series
                    valueField="jan"
                    name="Janeiro"
                    type="bar"
                />
                <Series
                    valueField="fev"
                    type="bar"
                    name="Fevereiro"
                />
                <Series
                    valueField="mar"
                    type="bar"
                    name="Março"
                />

                <Series
                    valueField="abr"
                    type="bar"
                    name="Abril"
                />

                <Series
                    valueField="mai"
                    type="bar"
                    name="Maio"
                />

                <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                <Export enabled={true} />

            </Chart>
        );
    }
}
