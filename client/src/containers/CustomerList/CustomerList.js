import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Edit from "@material-ui/icons/Edit"
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    tableHeader: {
        fontWeight: 'bold',
        fontSize: 16
    }
}));

const CustomerList = (props) => {
    
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    let isMounted = true;
    
    async function fetchData() {
      
      const res = await fetch('http://localhost:4000/v1/customers');
      res.json()
        .then((data) => {

          if (isMounted) {

            setCustomers(data);
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
    <div>
      <Typography variant="body1">Clientes</Typography>
      <Card style={{ marginTop: 10 }}>
        <CardContent>
          <Table aria-label="Tabela de clientes">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeader}>Código</TableCell>
                <TableCell className={classes.tableHeader}>Nome</TableCell>
                <TableCell className={classes.tableHeader}>Telefone</TableCell>
                <TableCell className={classes.tableHeader}>Email</TableCell>
                <TableCell className={classes.tableHeader}>Opções</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone.number}</TableCell>
                <TableCell>{row.email.address}</TableCell>
                <TableCell>
                  <Link to={'/customer-details/' + row.id}>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                  </Link>
                </TableCell>
              </TableRow>
              ))}
              {customers.length === 0 && 
              <TableRow>
                <TableCell colSpan="5">
                  Nenhum cliente foi encontrado.
                </TableCell>
              </TableRow>}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomerList;
