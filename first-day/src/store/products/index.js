const initialState = {
    products: [],
    status: 'start',
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_STARTED':
            return state;
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, products: action.data, status: 'success', error: '' }
        case 'FETCH_PRODUCTS_FAILURE':
            return { ...state, products: [], status: 'failure', error: action.error }
        default:
            return state;
    }
}