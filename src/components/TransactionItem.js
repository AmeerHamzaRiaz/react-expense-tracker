import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import { GlobalContext } from '../context/GlobalState';
import Slide from '@material-ui/core/Slide';

const TransactionItem = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const formatAmount = (amount) => {
        return (new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount))
    }


    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <ListItem divider={!props.isLast} >
                <ListItemAvatar>
                    {
                        props.amount < 0 ?
                            (
                                <Avatar style={{ backgroundColor: red[500] }}>
                                    <ArrowDownwardRoundedIcon />
                                </Avatar>
                            ) :
                            (
                                <Avatar style={{ backgroundColor: green[500] }}>
                                    <ArrowUpwardRoundedIcon />
                                </Avatar>
                            )
                    }
                </ListItemAvatar>

                <ListItemText
                    primary={formatAmount(props.amount)}
                    secondary={props.name}
                />

                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Slide>
    )
}

export default TransactionItem;