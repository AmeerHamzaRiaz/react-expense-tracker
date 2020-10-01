import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import IncomeExpenseCard from './IncomeExpenseCard'
import { GlobalContext } from "../context/GlobalState";
import { Container } from '@material-ui/core';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    let incomeSum = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);

    let expenseSum = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);

    return (
        <Container fixed>
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} sm={3}>
                    <IncomeExpenseCard amount={incomeSum} type="INCOME" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <IncomeExpenseCard amount={expenseSum} type="EXPENSE" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default IncomeExpense;