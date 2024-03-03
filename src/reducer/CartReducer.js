const ActionTypes = {
    ADD : 'ADD_TO_CART',
    REMOVE : 'REMOVE_FROM_CART',
    DELETE : 'REMOVE_PRODUCT_FROM_CART',
    CLEAR : 'CLEAR_CART'
}

const CartReducer = (state, action) => {
    switch (action.type) {
        
        case ActionTypes.ADD:
            const existingProduct = state.find((item) => item.id === action.payload.id);
            if (existingProduct){
                return state.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
            }else
            return [...state, { ...action.payload, quantity: 1 }];

        case ActionTypes.REMOVE:
            return state.map((item) =>item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0);
        
        case ActionTypes.DELETE:
            return state.filter((item) => item.id !== action.payload);

        case ActionTypes.CLEAR:
            return []

        default:
            return state;
    }
}

export default CartReducer;