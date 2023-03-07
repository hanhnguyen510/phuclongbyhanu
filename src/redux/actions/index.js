import { signInWithPopup, signOut } from 'firebase/auth';

import { auth, provider } from '../../firebase';
export const addToCart = (item) => {
    return {
        type: 'ADD_CART',
        payload: item,
    };
};
export const deleteToAllCart = (id) => {
    return {
        type: 'DELETE_ALL_CART',
        payload: id,
    };
};
export const removeToCart = (item) => {
    return {
        type: 'REMOVE_CART',
        payload: item,
    };
};
export const paymentSuccess = () => {
    return {
        type: 'PAYMENT_SUCCESS',
    };
};
export const addDataCustomer = (data) => {
    return {
        type: 'ADD_INFOR_CUSTOMER',
        payload: data,
    };
};
export const setUser = (payload) => ({
    type: 'SET_USER',
    user: payload,
});

export const signInWithGoogle = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(setUser(result.user));
            })
            .catch((error) => alert(error));
    };
};

export function singOutWithGoogle() {
    return (dispatch) => {
        signOut(auth, provider)
            .then((payload) => {
                dispatch(setUser(null));
            })
            .catch((error) => alert(error.message));
    };
}
