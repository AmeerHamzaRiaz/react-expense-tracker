import React, { useEffect, useContext } from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionsList from './components/TransactionsList'
import AddTransaction from './components/AddTransaction'
import { askForPermissioToReceiveNotifications } from './services/firebaseService';
import { GlobalContext } from './context/GlobalState';
import './App.css';


function App() {

  useEffect(() => {
    askForPermissioToReceiveNotifications();
  }, [])

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
