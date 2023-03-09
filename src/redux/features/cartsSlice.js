import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += action.payload.qty;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: action.payload.qty };
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = newCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                state.cartItems = newCartItems;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { cartQuantity, price } = cartItem;
                    cartTotal.total += price * cartQuantity;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                { total: 0, quantity: 0 },
            );

            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
    },
});
export const { addToCart, removeFromCart, decreaseCart, increaseCart, clearCart, getTotal } = cartsSlice.actions;
export default cartsSlice.reducer;
