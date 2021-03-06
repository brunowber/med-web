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

import './chart-bar.scss'

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
            anos: props.ano,
            width: window.width > 500 ? 500 : 400
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        if (window.innerWidth > 500) {
            this.setState({width: 500});
        }
        else if (window.innerWidth <= 500 && window.innerWidth > 400) {
            this.setState({width: 400});
        }
        else if (window.innerWidth <= 400) {
            this.setState({width: 350});
        }
        console.log(this.state.width)
    }


    render() {
        return (
            <Chart
                className="box"
                title="Total de exames"
                dataSource={this.state.data}
                id="chart"
            >
                <Size
                    height={300}
                    width={this.state.width}
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
