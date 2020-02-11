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
    Format,
    SeriesTemplate, Tooltip
} from 'devextreme-react/chart';



export default class ChartBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            argumentField: props.field,
            type : props.type,
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
                {/* <SeriesTemplate
                    nameField={this.state.argumentField}
                    customizeSeries={customizeSeries}
                /> */}
                <CommonSeriesSettings
                    argumentField={this.state.argumentField}
                    valueField = "ano"
                    type={this.state.type}
                    hoverMode="allArgumentPoints"
                    selectionMode="allArgumentPoints"
                >
                    {/* <Label visible={true}>
                        <Format type="fixedPoint" precision={0} />
                    </Label> */}
                </CommonSeriesSettings>
                <ArgumentAxis tickInterval={1}>
                    <Label format="decimal" />
                </ArgumentAxis>
                <Series
                    valueField="jan"
                    name="Janeiro"
                    type={this.state.type}
                />
                <Series
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
                />
                <Tooltip enabled={true} />
                <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                <Export enabled={true} />

            </Chart>
        );
    }
}
