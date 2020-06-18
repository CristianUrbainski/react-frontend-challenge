import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  },
  value: {
    fontSize: 18,
    fontWeight: 700
  },
  description: {
    fontSize: 14
  }
}));

const LimiteCredito = (props) => {

  const classes = useStyles();

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
            <Typography
              className={classes.value}
              style={{ color: blue[900] }}>
              {props.creditLimit?.granted?.value}
            </Typography>
            <Typography
              className={classes.description}
              color="textSecondary"
              gutterBottom>
              {props.creditLimit?.granted?.description}
            </Typography>
            <Typography
              className={classes.value}
              style={{ marginTop: 10, color: green[900] }}>
              {props.creditLimit?.available?.value}
            </Typography>
            <Typography
              className={classes.description}
              color="textSecondary"
              gutterBottom>
              {props.creditLimit?.available?.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default LimiteCredito;