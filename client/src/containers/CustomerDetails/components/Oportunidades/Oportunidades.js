import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { green, blue, red, grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const oportunidadesStyles = makeStyles(theme => ({
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
  }
}));

const oportunidadeItemStye = makeStyles(theme => ({
  metricaTitulo: {
    fontWeight: 'bold',
    fontSize: 14
  },
  metricaValor: {
    fontSize: 11
  }
}))

const Oportunidades = (props) => {

  const classes = oportunidadesStyles();

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
            <OportuidadeItem item={props.opportunity?.win} avatarColor={classes.green} />

            <OportuidadeItem item={props.opportunity?.open} avatarColor={classes.red} />

            <OportuidadeItem item={props.opportunity?.lost} avatarColor={classes.blue} style={{ marginTop: 10 }} />

            <OportuidadeItem item={props.opportunity?.discarded} avatarColor={classes.gray} style={{ marginTop: 10 }} />

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

const OportuidadeItem = (props) => {

  const classes = oportunidadeItemStye();
  
  return (
    <Grid container item={true} spacing={1} xs={6} style={props.style}>
      <Grid item>
        <Avatar variant="rounded" className={props.avatarColor}>
          {props.item?.quantity}
        </Avatar>
      </Grid>
      <Grid item>
        <Typography
          className={classes.metricaTitulo}
          color="textSecondary">
          {props.item?.description}
        </Typography>
        <Typography
          className={classes.metricaValor}
          color="textSecondary">
          {props.item?.value}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Oportunidades;