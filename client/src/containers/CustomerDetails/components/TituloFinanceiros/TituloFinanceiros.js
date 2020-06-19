import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { red, green, orange } from '@material-ui/core/colors';

const tituloFinanceirosStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  },
  red: {
    color: '#fff',
    backgroundColor: red[500],
    marginTop: 4
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
    marginTop: 4
  },
  orange: {
    color: '#fff',
    backgroundColor: orange[500],
    marginTop: 4
  }
}));

const tituloFinanceiroItemStyles = makeStyles(theme => ({
  value: {
    fontSize: 18,
    fontWeight: 700
  },
  description: {
    fontSize: 14
  }
}));

const TituloFinanceiros = (props) => {

  const classes = tituloFinanceirosStyles();

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2">
              Titulos financeiros
            </Typography>
          </Grid>

          <TiituloFinanceiroItem item={props.financial?.losers} avatarColor={classes.red} />
          <TiituloFinanceiroItem item={props.financial?.toWin} avatarColor={classes.orange} style={{ marginTop: 10 }} />
          <TiituloFinanceiroItem item={props.financial?.paid} avatarColor={classes.green} style={{ marginTop: 10 }} />

        </Grid>
      </CardContent>
    </Card>
  )
}

const TiituloFinanceiroItem = (props) => {

  const classes = tituloFinanceiroItemStyles();

  return (
    <Grid container item={true} spacing={1} xs={12} style={props.style}>
      <Grid item>
        <Avatar variant="rounded" className={props.avatarColor}>
          {props.item?.quantity}
        </Avatar>
      </Grid>
      <Grid item>
        <Typography
          className={classes.value}
          style={{ fontWeight: 'bold' }}
          color="textSecondary">
          {props.item?.value}
        </Typography>
        <Typography
          className={classes.description}
          color="textSecondary">
          {props.item?.description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default TituloFinanceiros;