import React from 'react';

import { ProgressBar } from 'devextreme-react/progress-bar';
import "./notifications.scss"

function formatTime(value) {
    return `00:00:${(`0${value}`).slice(-2)}`;
}

function statusFormat(value) {
    console.log(value)
    let percentage = value * 100
    percentage = percentage.toFixed(2)
    return `${percentage}%`;
}

let intervalId;

export default class ProgressBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxValue: props.maxValue,
            actualValue: props.actualValue,
            text: props.text,
        };

    }
    render() {
        return (
            <div>
                <div >
                    {this.state.text}
                    {this.state.maxValue - this.state.actualValue <= 0 ? 0 : this.state.maxValue - this.state.actualValue}
                </div>
                <ProgressBar
                    id="progress-bar-status"
                    className={this.state.actualValue == this.state.maxValue ? 'complete' : 'incomplete'}
                    width="20%"
                    min={0}
                    max={this.state.maxValue}
                    statusFormat={statusFormat}
                    value={this.state.actualValue}
                />
            </div>
        );
    }
}

{/* <ProgressBarComponent
      maxValue={19}
      actualValue={19}
      text="Valores restantes: "
    /> */}