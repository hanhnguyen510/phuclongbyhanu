const INIT_STATE = {
    dataCustomer: {},
};
export const customerInforReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'ADD_INFOR_CUSTOMER':
            return {
                ...state,
                dataCustomer: action.payload,
            };

        default:
            return state;
    }
};
