import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import LocationOn from "@material-ui/icons/LocationOn"

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  }
}));

const Local = (props) => {

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
              Local
            </Typography>
          </Grid>

          <Grid item style={{ width: '100%', height: 172, backgroundColor: "#e0e0e0" }}>
            
          </Grid>

          <Grid container spacing={1} style={{ marginTop: 10 }}>
            <Grid item style={{ marginTop: 8 }}>
              <LocationOn style={{ fontSize: 24 }} />
            </Grid>

            <Grid item>
              <Typography
                color="textSecondary">
                  {(props.address !== undefined) ? props.address?.street + ', ' + props.address?.number : '' }
              </Typography>

              <Typography
                color="textSecondary"
                style={{ fontSize: 12 }}>
                {props.address?.type?.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default Local;