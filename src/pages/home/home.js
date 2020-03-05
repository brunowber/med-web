import React from 'react';
import './home.scss';
import { ChartBar, TextEditor } from '../../components';
import { dataGrafico } from '../../data';
import { Grid } from '@material-ui/core';
import Draggable from 'react-draggable';

export default () => (
  <React.Fragment>
    <TextEditor />
    {/* <Grid justify="center" className="root" container spacing={1}>
    <Grid item xs={12}></Grid>
        <Draggable bounds="parent">
          <Grid className="cursor" item xs={12} md={5}>
            <ChartBar type="bar" data={dataGrafico} field="mes" />
          </Grid>
        </Draggable>
        <Draggable bounds="parent">
          <Grid className="cursor" item xs={12} md={5}>
            <ChartBar type="line" data={dataGrafico} field="mes" />
          </Grid>
        </Draggable>

        <Draggable bounds="parent">
          <Grid className="cursor" item xs={12} md={5}>
            <ChartBar type="spline" data={dataGrafico} field="mes" />
          </Grid>
        </Draggable>

        <Draggable bounds="parent">
          <Grid className="cursor" item xs={12} md={5}>
            <ChartBar type="fullstackedbar" data={dataGrafico} field="mes" />
          </Grid>

        </Draggable>
    </Grid> */}
  </React.Fragment>
);
