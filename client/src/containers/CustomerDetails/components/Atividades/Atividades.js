import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, TextField, InputAdornment, Avatar } from '@material-ui/core';
import Search from "@material-ui/icons/Search"
import { grey, red, blue, yellow, green } from '@material-ui/core/colors';

const atividadesStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100% + 8px)'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  },
  grey: {
    color: '#fff',
    backgroundColor: grey[500]
  },
  red: {
    color: '#fff',
    backgroundColor: red[500]
  },
  blue: {
    color: '#fff',
    backgroundColor: blue[500]
  },
  yellow: {
    color: '#fff',
    backgroundColor: yellow[500]
  },
  green: {
    color: '#fff',
    backgroundColor: green[500]
  }
}));

const atividadeItemStyles = makeStyles(theme => ({
  quantidadeContainer: {
    display: 'inline-flex',
    marginRight: 10
  },
  description: {
    marginLeft: 5,
    marginTop: 4,
    fontSize: 14
  },
  avatarSize: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

const Atividades = (props) => {

  const classes = atividadesStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2">
              Atividades
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <form noValidate autoComplete="off">
              <TextField id="txtSearch" placeholder="Pesquisar" variant="outlined" size="small" fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }} />
            </form>
          </Grid>

          <Grid container style={{ marginTop: 5 }}>
            {props.activities?.total !== undefined 
              && <AtividadeItem item={props.activities?.total} avatarColor={classes.grey} />}

            {props.activities?.delayed !== undefined 
              && <AtividadeItem item={props.activities?.delayed} avatarColor={classes.red} />}

            {props.activities?.progress !== undefined 
              && <AtividadeItem item={props.activities?.progress} avatarColor={classes.blue} />}

            {props.activities?.expected !== undefined 
              && <AtividadeItem item={props.activities?.expected} avatarColor={classes.yellow} />}

            {props.activities?.completed !== undefined 
              && <AtividadeItem item={props.activities?.completed} avatarColor={classes.green} />}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

const AtividadeItem = (props) => {

  const classes = atividadeItemStyles();

  return (
    <Grid item className={classes.quantidadeContainer}>
      <Avatar variant="rounded" className={[props.avatarColor, classes.avatarSize]}>
        {props.item?.quantity}
      </Avatar>
      <Typography
        color="textSecondary"
        className={classes.description}>
        {props.item?.description}
      </Typography>
    </Grid>
  )
}

export default Atividades;