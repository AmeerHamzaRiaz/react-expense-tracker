export default (state, action) => {
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
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
            let newTransaction = { id: Date.now(), amount: parseInt(state.amount), name: state.name };

            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                amount: 0.00,
                name: '',
                transactions: [...state.transactions, newTransaction]
            }
        }


        default:
            return state;
    }
}