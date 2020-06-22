import React, { useState, useEffect } from "react";
import { Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GeneralInformations from './components/GeneralInformations';
import Local from './components/Local';
import Atividades from './components/Atividades';
import Oportunidades from './components/Oportunidades';
import LimiteCredito from './components/LimiteCredito';
import Vendas from './components/Vendas';
import TituloFinanceiros from './components/TituloFinanceiros';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  gridLeft: {
    marginTop: '8px'
  },
  container: {
    height: '100%'
  },
  flexStart: {
    alignContent: 'flex-start'
  },
  floatAction: {
    position: 'fixed',
    bottom: 28,
    right: 48
  }
}));

const CustomerDetails = (props) => {

  const classes = useStyles();
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    
    let isMounted = true;

    async function fetchData() {
      
      var id = props.match.params.id;

      const res = await fetch('http://localhost:4000/v1/customer/' + id);
      res.json()
        .then((data) => {

          if (isMounted) {
            
            setCustomer(data);
          }
        })
        .catch(console.log);
    }

    fetchData();

    return () => { 
      isMounted = false;
    };

  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid container item={true} spacing={2} className={[classes.gridLeft, classes.flexStart].join(" ")} xs={12} sm={12} lg={6} xl={6}>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <GeneralInformations customer={customer} />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Local address={customer?.address}/>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Oportunidades opportunity={customer?.opportunity} />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <LimiteCredito creditLimit={customer?.creditLimit} />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Vendas />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <TituloFinanceiros financial={customer?.financial} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} lg={6} xl={6} className={classes.container} style={{ paddingBottom: 0 }}>
          <Atividades activities={customer?.activities}/>
        </Grid>

        <Fab color="primary" aria-label="ação" className={classes.floatAction}>
          <AssignmentIcon />
        </Fab>
      </Grid>
    </div>
);

}

export default CustomerDetails;