const INIT_STATE = {
    carts: [],
};
export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const itemIndex = state.carts.findIndex((data) => data.id === action.payload.id);
            if (itemIndex >= 0) {
                const newCarts = state.carts;
                newCarts[itemIndex].count += action.payload.count;
                newCarts[itemIndex].total += action.payload.total;
                return { carts: [...newCarts] };
            } else {
                return {
                    ...state,
                    carts: [...state.carts, action.payload],
                };
            }
        case 'REMOVE_CART':
            const newDecreaseCarts = state.carts;
            const itemDecreaseIndex = state.carts.findIndex((data) => data.id === action.payload.id);
            console.log(itemDecreaseIndex);
            if (newDecreaseCarts[itemDecreaseIndex].count > 1) {
                newDecreaseCarts[itemDecreaseIndex].count -= 1;
                newDecreaseCarts[itemDecreaseIndex].total -= action.payload.price;
                return { carts: [...newDecreaseCarts] };
            } else if (newDecreaseCarts[itemDecreaseIndex].count === 1) {
                const data = newDecreaseCarts.filter((cart) => cart.id !== action.payload.id);
                return {
                    ...state,
                    carts: data,
                };
            }
            break;

        case 'DELETE_ALL_CART':
            const data = state.carts.filter((cart) => cart.id !== action.payload);
            return {
                ...state,
                carts: data,
            };
        case 'PAYMENT_SUCCESS':
            return {
                ...state,
                carts: [],
            };
        default:
            return state;
    }
};
