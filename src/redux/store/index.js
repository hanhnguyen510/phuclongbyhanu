// import { createStore, applyMiddleware } from 'redux';
// import ThunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import { rootReducer } from '../reducers';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)));

import { configureStore } from '@reduxjs/toolkit';
import cartsSlice from '../features/cartsSlice';
import customerInforSlice from '../features/customerInforSlice';
export const store = configureStore({
    reducer: {
        carts: cartsSlice,
        dataCustomer: customerInforSlice,
    },
});

export default store;
