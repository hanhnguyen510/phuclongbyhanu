import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customerInfor: {},
};

const customerInforSlice = createSlice({
    name: 'dataCustomer',
    initialState,
    reducers: {
        addDataCustomer(state, action) {
            state.customerInfor = action.payload;
        },
    },
});
export const { addDataCustomer } = customerInforSlice.actions;
export default customerInforSlice.reducer;
