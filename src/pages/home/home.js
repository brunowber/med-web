import React from 'react';
import './home.scss';
import { ChartBar } from '../../components';
import { dataGrafico } from '../../data';
import { Grid } from '@material-ui/core';
import Draggable from 'react-draggable';

export default () => (
  <React.Fragment>
    <Grid spacing={6}>

      <Draggable bounds="body">
        <Grid className="box cursor" item xs={12} md={6}>
          <ChartBar type="bar" data={dataGrafico} field="mes" />
        </Grid>
      </Draggable>

      <Draggable bounds="body">
        <Grid className="box cursor" item xs={12} md={6}>
          <ChartBar type="line" data={dataGrafico} field="mes" />
        </Grid>
      </Draggable>

      <Draggable bounds="body">
        <Grid className="box cursor" item xs={12} md={6}>
          <ChartBar type="spline" data={dataGrafico} field="mes" />
        </Grid>
      </Draggable>

      <Draggable bounds="body">
        <Grid className="box cursor" item xs={12} md={6}>
          <ChartBar type="fullstackedbar" data={dataGrafico} field="mes" />
        </Grid>
      </Draggable>

    </Grid>
  </React.Fragment>
);
