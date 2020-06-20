import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CountUpText from './CountUpText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        marginTop: '16px',
    },
}));

const IncomeExpenseCard = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6">{props.type}</Typography>
            <CountUpText amount={props.amount}/>
        </Paper>
    )
}

export default IncomeExpenseCard;