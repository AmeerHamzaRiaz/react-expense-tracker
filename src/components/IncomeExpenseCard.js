import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        marginTop: '16px',
        // marginLeft: '1em',
        // marginRight: '1em'
    },
}));

const IncomeExpenseCard = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6">{props.type}</Typography>
            <Typography variant="h4">{props.amount} $</Typography>
        </Paper>
    )
}

export default IncomeExpenseCard;