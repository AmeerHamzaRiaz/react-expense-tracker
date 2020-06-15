import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GlobalContext } from '../context/GlobalState'

const TransactionModal = () => {
  const { isModalOpen, toggleModal, addTransaction, name, setName, amount, setAmount } = useContext(GlobalContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTransaction();
  }

  return (
    <div>
      <Dialog open={isModalOpen} onClose={toggleModal} aria-labelledby="form-dialog-title">
        <form onSubmit={e => onFormSubmit(e)}>
          <DialogTitle id="form-dialog-title">Add New Transaction</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter transaction amount and name. Negative amount = Expense, while Positive amount = Income
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Transaction Name"
              type="text"
              fullWidth
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <TextField
              margin="dense"
              id="name"
              label="Amount"
              type="number"
              fullWidth
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={toggleModal} color="primary">
              Cancel
          </Button>
            <Button color="primary" type="submit">
              Add Transaction
          </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default TransactionModal;