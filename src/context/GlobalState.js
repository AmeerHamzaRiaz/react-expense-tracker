import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

// Store
const initialState = {
    transactions: [],
    isModalOpen: false,
    name: '',
    amount: 0.00,
}

// Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function toggleModal() {
        dispatch({
            type: 'TOGGLE_MODAL'
        })
    }

    function setName(name) {
        dispatch({
            type: 'SET_NAME',
            payload: name
        })
    }

    function setAmount(amount) {
        dispatch({
            type: 'SET_AMOUNT',
            payload: amount
        })
    }

    function addTransaction() {
        dispatch({
            type: 'ADD_TRANSACTION',
        })
    }
    
    return (<GlobalContext.Provider
        value={{
            transactions: state.transactions,
            isModalOpen: state.isModalOpen,
            name: state.name,
            amount: state.amount,
            deleteTransaction,
            addTransaction,
            toggleModal,
            setAmount,
            setName
        }}>
        {children}
    </GlobalContext.Provider>)
}