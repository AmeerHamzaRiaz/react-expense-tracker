export default (state, action) => {
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            {
                const updatedTransactions = state.transactions.filter(item => item.id !== action.payload);
                localStorage.setItem('TRANSACTIONS', JSON.stringify(updatedTransactions));

                return {
                    ...state,
                    transactions: updatedTransactions
                }

            }

        case 'TOGGLE_MODAL':
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                amount: 0.00,
                name: ''
            }

        case 'SET_AMOUNT':
            return {
                ...state,
                amount: action.payload
            }

        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'ADD_TRANSACTION': {
            const newTransaction = { id: Date.now(), amount: parseInt(state.amount), name: state.name };
            const updatedTransactions = [...state.transactions, newTransaction];            
            localStorage.setItem('TRANSACTIONS', JSON.stringify(updatedTransactions));

            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                amount: 0.00,
                name: '',
                transactions: updatedTransactions
            }
        }

        case 'LOAD_TRANSACTION': {
            return{
                ...state,
                transactions: [...action.payload]
            }
        }

        default:
            return state;
    }
}