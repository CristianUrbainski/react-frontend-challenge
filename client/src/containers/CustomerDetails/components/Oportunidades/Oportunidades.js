import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { green, blue, red, grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  },
  green: {
    color: '#fff',
    backgroundColor: green[500]
  },
  blue: {
    color: '#fff',
    backgroundColor: blue[500]
  },
  red: {
    color: '#fff',
    backgroundColor: red[500]
  }, 
  grey: {
    color: '#fff',
    backgroundColor: grey[500]
  },
  metricaTitulo: {
    fontWeight: 'bold',
    fontSize: 14
  },
  metricaValor: {
    fontSize: 11
  }
}));

const Oportunidades = (props) => {

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom>
              Oportunidades (7)
            </Typography>
          </Grid>

          <Grid container>
            <Grid container item={true} spacing={1} xs={6}>
              <Grid item>
                <Avatar variant="rounded" className={classes.green}>
                  {props.opportunity?.win?.quantity}
                </Avatar>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.metricaTitulo}
                  color="textSecondary">
                  {props.opportunity?.win?.description}
                </Typography>
                <Typography
                  className={classes.metricaValor}
                  color="textSecondary">
                  {props.opportunity?.win?.value}
                </Typography>
              </Grid>
            </Grid>

            <Grid container item={true} spacing={1} xs={6}>
              <Grid item>
                <Avatar variant="rounded" className={classes.red}>
                {props.opportunity?.open?.quantity}
                </Avatar>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.metricaTitulo}
                  color="textSecondary">
                  {props.opportunity?.open?.description}
                </Typography>
                <Typography
                  className={classes.metricaValor}
                  color="textSecondary">
                  {props.opportunity?.open?.value}
                </Typography>
              </Grid>
            </Grid>

            <Grid container item={true} spacing={1} xs={6} style={{ marginTop: 10 }}>
              <Grid item>
                <Avatar variant="rounded" className={classes.blue}>
                {props.opportunity?.lost?.quantity}
                </Avatar>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.metricaTitulo}
                  color="textSecondary">
                  {props.opportunity?.lost?.description}
                </Typography>
                <Typography
                  className={classes.metricaValor}
                  color="textSecondary">
                  {props.opportunity?.lost?.value}
                </Typography>
              </Grid>
            </Grid>

            <Grid container item={true} spacing={1} xs={6} style={{ marginTop: 10 }}>
              <Grid item>
                <Avatar variant="rounded" className={classes.grey}>
                {props.opportunity?.discarded?.quantity}
                </Avatar>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.metricaTitulo}
                  color="textSecondary">
                  {props.opportunity?.discarded?.description}
                </Typography>
                <Typography
                  className={classes.metricaValor}
                  color="textSecondary">
                  {props.opportunity?.discarded?.value}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography style={{ fontSize: 12, marginLeft: 5, marginTop: 10 }}>
                <Link to="#">
                  VER TODAS AS OPORTUNIDADES
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default Oportunidades;