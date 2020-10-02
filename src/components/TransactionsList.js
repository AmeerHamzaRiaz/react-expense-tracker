import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TransactionItem from './TransactionItem';
import { GlobalContext } from "../context/GlobalState";
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  list: {
    marginLeft: '1em',
    marginRight: '1em',
  },
}));

const TransactionsList = () => {
  const { transactions, loadTransactions } = useContext(GlobalContext);

  const classes = useStyles();

  const loadTransactionsFromStorage = () => {
    const transactionsJSON = localStorage.getItem('TRANSACTIONS');
    console.log(transactionsJSON)
    if (transactionsJSON) {
      // addTransaction()
      const transactions = JSON.parse(transactionsJSON);
      console.log(transactions)
      loadTransactions(transactions);
    }
  }


  useEffect(() => {
    loadTransactionsFromStorage();
  }, []);

  return (
    <Container>
      <Grid container alignItems="center" justify="center" >
        {
          transactions.length !== 0 && <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.title} align="center">
              RECENT TRANSACTIONS
          </Typography>
            <div className={classes.demo}>
              <List>
                {transactions.map((item, index) => <TransactionItem
                  key={item.id}
                  id={item.id}
                  amount={item.amount}
                  name={item.name}
                  isLast={index === transactions.length - 1}
                />)}
              </List>
            </div>
          </Grid>
        }
      </Grid>
    </Container>
  );
}

export default TransactionsList;