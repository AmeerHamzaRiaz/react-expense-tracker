import React, { useContext } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from "../context/GlobalState";
import CountUpText from './CountUpText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: 'white',
        marginTop: '16px',
        backgroundColor: theme.palette.primary.main
    },
}));

const Balance = () => {
    const classes = useStyles();
    const { transactions } = useContext(GlobalContext);
    const balance = transactions
        .reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
        .toFixed(2);


    return (
        <Container fixed>
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} color="primary">
                        <Typography variant="h6">YOUR BALANCE</Typography>
                        <CountUpText amount={balance} isBalance={true} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Balance;