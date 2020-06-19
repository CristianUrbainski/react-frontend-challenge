import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';

const limiteCreditoStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  },
  blue: {
    color: blue[900]
  }, 
  green: {
    marginTop: 16, 
    color: green[900]
  }
}));

const limiteCreditoItemStyles = makeStyles(theme => ({
  value: {
    fontSize: 18,
    fontWeight: 700
  },
  description: {
    fontSize: 14
  }
}))

const LimiteCredito = (props) => {

  const classes = limiteCreditoStyles();

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom>
              Limite de crédito
            </Typography>
          </Grid>

          <Grid item xs={12} style={{ marginTop: 12 }}>

            <LimiteCreditoItem item={props.creditLimit?.granted} labelColor={classes.blue} />
            <LimiteCreditoItem item={props.creditLimit?.available} labelColor={classes.green} />

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

const LimiteCreditoItem = (props) => {

  const classes = limiteCreditoItemStyles();
  
  return (
    <Grid item>
      <Typography
        className={classes.value, props.labelColor}>
        {props.item?.value}
      </Typography>
      <Typography
        className={classes.description}
        color="textSecondary"
        gutterBottom>
        {props.item?.description}
      </Typography>
    </Grid>
  )
}

export default LimiteCredito;