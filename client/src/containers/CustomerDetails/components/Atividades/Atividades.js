import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, TextField, InputAdornment, Avatar } from '@material-ui/core';
import Search from "@material-ui/icons/Search"
import { grey, red, blue, yellow, green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
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
  },
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

  const classes = useStyles();

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
            {props.activities?.total !== undefined && <Grid item className={classes.quantidadeContainer}>
              <Avatar variant="rounded" className={[classes.grey, classes.avatarSize]}>
                {props.activities?.total?.quantity}
              </Avatar>
              <Typography
                color="textSecondary"
                className={classes.description}>
                {props.activities?.total?.description}
              </Typography>
            </Grid>}

            {props.activities?.delayed !== undefined && <Grid item className={classes.quantidadeContainer}>
              <Avatar variant="rounded" className={[classes.red, classes.avatarSize]}>
                {props.activities?.delayed?.quantity}
              </Avatar>
              <Typography
                color="textSecondary"
                className={classes.description}>
                {props.activities?.delayed?.description}
              </Typography>
            </Grid>}

            {props.activities?.progress !== undefined && <Grid item className={classes.quantidadeContainer}>
              <Avatar variant="rounded" className={[classes.blue, classes.avatarSize]}>
                {props.activities?.progress?.quantity}
              </Avatar>
              <Typography
                color="textSecondary"
                className={classes.description}>
                {props.activities?.progress?.description}
              </Typography>
            </Grid>}

            {props.activities?.expected !== undefined && <Grid item className={classes.quantidadeContainer}>
              <Avatar variant="rounded" className={[classes.yellow, classes.avatarSize]}>
                {props.activities?.expected?.quantity}
              </Avatar>
              <Typography
                color="textSecondary"
                className={classes.description}>
                {props.activities?.expected?.description}
              </Typography>
            </Grid>}

            {props.activities?.completed !== undefined && <Grid item className={classes.quantidadeContainer}>
              <Avatar variant="rounded" className={[classes.green, classes.avatarSize]}>
                {props.activities?.completed?.quantity}
              </Avatar>
              <Typography
                color="textSecondary"
                className={classes.description}>
                {props.activities?.completed?.description}
              </Typography>
            </Grid>}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default Atividades;