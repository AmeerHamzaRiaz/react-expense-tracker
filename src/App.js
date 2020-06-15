import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionsList from './components/TransactionsList'
import AddTransaction from './components/AddTransaction'
import './App.css';

function App() {

  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionsList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
