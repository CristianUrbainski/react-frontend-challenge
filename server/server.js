const express = require("express");
const app = express();

app.get("/v1/customers", (req, res, next) => {

  var customers1 = {
    id: 1,
    name: 'Justine Robinson',
    phone: {
      number: '45 9 9555 5555',
      description: 'Celular'
    },
    email: {
      address: 'justine@email.com',
      description: 'Trabalho'
    }
  }

  var arraryCustomers = [];
  arraryCustomers.push(customers1);

  setResponseJson(res, arraryCustomers);
});

app.get('/v1/customer/:id', (req, res, next) => {
  
  var id = req.params.id;

  if (id != 1) {

    setResponseJson(res, undefined)
  } else {

    var customers1 = {
      id: 1,
      name: 'Justine Robinson',
      company: {
        id: 1,
        name: 'Acme inc'
      },
      phone: {
        number: '45 9 9555 5555',
        description: 'Celular'
      },
      email: {
        address: 'justine@email.com',
        description: 'Trabalho'
      },
      address: {
        street: 'Avenida Brasil',
        number: 1049,
        type: {
          description: 'Trabalho'
        }
      },
      opportunity: {
        win: {
          quantity: 4,
          value: 'R$ 20.000,00',
          description: 'Ganhas'
        }, 
        lost: {
          quantity: 2,
          value: 'R$ 4.300,00',
          description: 'Perdidas'
        },
        open: {
          quantity: 1,
          value: 'Diversas moedas',
          description: 'Abertas'
        }, 
        discarded: {
          quantity: 0,
          value: '',
          description: 'Descartadas'
        }
      },
      creditLimit: {
        granted: {
          value: 'R$ 12.000,00',
          description: 'Concedido'
        },
        available: {
          value: 'R$ 3.105,00',
          description: 'Disponível'
        }
      },
      financial: {
        losers: {
          quantity: 1,
          value: 'R$ 3.105,01',
          description: 'Vencidos'
        },
        toWin: {
          quantity: 2,
          value: 'R$ 3.105,01',
          description: 'A vencer'
        }, 
        paid: {
          quantity: 2,
          value: 'R$ 3.105,01',
          description: 'Pagos'
        }
      },
      activities: {
        total: {
          quantity: 25,
          description: 'Total'
        },
        delayed: {
          quantity: 1,
          description: 'Em atraso'
        },
        progress: {
          quantity: 0,
          description: 'Em andamento'
        }, 
        expected: {
          quantity: 3,
          description: 'Previstas'
        },
        completed: {
          quantity: 21,
          description: 'Concluídas'
        }
      },
      status: 'ATIVO'
    }

    setResponseJson(res, customers1);
  }
});

app.listen(4000, () => {

  console.log("Listing on port 4000");
});

function setResponseJson(res, dados) {

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (dados != undefined) {

    res.end(JSON.stringify(dados));
  } else {

    res.status(404).send('Not found!');
  }
}