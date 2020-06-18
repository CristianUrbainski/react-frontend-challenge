import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { red, green, orange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
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
  },
  value: {
    fontSize: 18,
    fontWeight: 700
  },
  description: {
    fontSize: 14
  }
}));

const TituloFinanceiros = (props) => {

  const classes = useStyles();

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

          <Grid container item={true} spacing={1} xs={12}>
            <Grid item>
              <Avatar variant="rounded" className={classes.red}>
                {props.financial?.losers?.quantity}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography
                className={classes.value}
                style={{ fontWeight: 'bold' }}
                color="textSecondary">
                {props.financial?.losers?.value}
              </Typography>
              <Typography
                className={classes.description}
                color="textSecondary">
                {props.financial?.losers?.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid container item={true} spacing={1} xs={12} style={{ marginTop: 10 }}>
            <Grid item>
              <Avatar variant="rounded" className={classes.orange}>
                {props.financial?.toWin?.quantity}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography
                className={classes.value}
                style={{ fontWeight: 'bold' }}
                color="textSecondary">
                {props.financial?.toWin?.value}
              </Typography>
              <Typography
                className={classes.description}
                color="textSecondary">
                {props.financial?.toWin?.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid container item={true} spacing={1} xs={12} style={{ marginTop: 10 }}>
            <Grid item>
              <Avatar variant="rounded" className={classes.green}>
                {props.financial?.paid?.quantity}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography
                className={classes.value}
                style={{ fontWeight: 'bold' }}
                color="textSecondary">
                {props.financial?.paid?.value}
              </Typography>
              <Typography
                className={classes.description}
                color="textSecondary">
                {props.financial?.paid?.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default TituloFinanceiros;