import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Chip } from '@material-ui/core';
import AccountCircle from "@material-ui/icons/AccountCircle"
import Call from "@material-ui/icons/Call"
import Mail from "@material-ui/icons/Mail"
import WhatsApp from "@material-ui/icons/WhatsApp"
import Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter"
import LinkedIn from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  },
  redeSocial: {
    fontSize: 20
  }
}));

const GeneralInformations = (props) => {

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
              Informações gerais
            </Typography>
          </Grid>

          <Grid container>
            <Grid item xs={6} sm={5} lg={4}>
              <AccountCircle style={{ fontSize: 72 }} />
            </Grid>

            <Grid item xs={6} sm={7} lg={8}>
              <Typography
                color="textSecondary">
                {props.customer?.name}
              </Typography>

              <Typography
                color="textSecondary">
                {props.customer?.company?.name}
              </Typography>

              {props.customer?.status === 'ATIVO' && <Chip label={"Ativo"} />}
              {props.customer?.status === 'INATIVO' && <Chip label={"Inativo"} color="red" />}
            </Grid>
          </Grid>

          <Grid container spacing={1} style={{ marginTop: 20 }}>
            <Grid item style={{ marginTop: 6 }}>
              <Call style={{ fontSize: 24 }} />
            </Grid>

            <Grid item>
              <Typography
                variant="body2"
                color="textSecondary">
                {props.customer?.phone?.number}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary">
                {props.customer?.phone?.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} style={{ marginTop: 10 }}>
            <Grid item style={{ marginTop: 6 }}>
              <Mail style={{ fontSize: 24 }} />
            </Grid>

            <Grid item>
              <Typography
                variant="body2"
                color="textSecondary">
                {props.customer?.email?.address}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary">
                {props.customer?.email?.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: 10 }} justify="flex-end">
            <WhatsApp className={ classes.redeSocial } />
            <Facebook className={ classes.redeSocial } />
            <Instagram className={ classes.redeSocial } />
            <Twitter className={ classes.redeSocial } />
            <LinkedIn className={ classes.redeSocial } />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default GeneralInformations;