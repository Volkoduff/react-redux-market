import { createSlice } from "@reduxjs/toolkit";

const initialUiSlice = {
    isCartShown: false,
    notification: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiSlice,
    reducers: {
        toggleCart(state) {
            state.cartIsShown = !state.cartIsShown;
        },
        showNotifications(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;
