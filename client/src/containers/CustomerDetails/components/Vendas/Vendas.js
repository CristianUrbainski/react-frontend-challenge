import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  }
}));

const Vendas = () => {

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
              Vendas
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              color="textSecondary"
              style={{ height: 84, marginTop: 84, textAlign: 'center' }}>
              Adicionar um gráfico aqui
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default Vendas;