import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed || !recovered || !deaths || !lastUpdate) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent='center' className={styles.gridContainer}>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textPrimary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>{confirmed ? <CountUp start={0} end={confirmed} duration={2.5} separator="," /> : 'Loading...'}</Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>{recovered ? <CountUp start={0} end={recovered} duration={2.5} separator="," /> : 'Loading...'}</Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>{deaths ? <CountUp start={0} end={deaths} duration={2.5} separator="," /> : 'Loading...'}</Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
