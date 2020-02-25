import React from 'react';
import './home.scss';
import { ChartBar } from '../../components';
import { dataGrafico } from '../../data';
import { Grid } from '@material-ui/core';

export default () => (
  <React.Fragment>
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <ChartBar type="bar" data={dataGrafico} field="mes" />
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartBar type="line" data={dataGrafico} field="mes" />
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartBar type="spline" data={dataGrafico} field="mes" />
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartBar type="fullstackedbar" data={dataGrafico} field="mes" />
      </Grid>
    </Grid>
  </React.Fragment>
);
