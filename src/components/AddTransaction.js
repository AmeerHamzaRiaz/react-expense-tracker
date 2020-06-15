import React, { useContext } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import TransactionModal from "./TransactionModal";
import { GlobalContext } from '../context/GlobalState'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(3)
    },
}));

const AddTransaction = () => {
    const classes = useStyles();
    const { toggleModal } = useContext(GlobalContext);

    return (
        <>
            <Tooltip title="Add New Expense" aria-label="add" placement="left" arrow>
                <Fab color="secondary" aria-label="add" onClick={toggleModal} className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <TransactionModal />
        </>
    )
}

export default AddTransaction;