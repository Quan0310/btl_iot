import React from 'react';
import Box from '@material-ui/core/Box';

import { Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Temperature from '../homepageitems/cart/temperature';
import Humidity from '../homepageitems/cart/humidity';
import Light from '../homepageitems/cart/light';
import MainChart from '../homepageitems/chart/MainChart';
import Switchbox from '../switch/switch';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  }
}));

const HomePage = () => {

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid item xs={4}>
          <Temperature />
        </Grid>
        <Grid item xs={4}>
          <Humidity />
        </Grid>
        <Grid item xs={4}>
          <Light />
        </Grid>
      </div>
      <Box width={1} className={classes.root}>

        <Grid item xs={9}>
          <MainChart />
        </Grid>
        <Grid item xs={3}>
          <Switchbox />
        </Grid>

      </Box>
    </>
  );
};

export default HomePage;