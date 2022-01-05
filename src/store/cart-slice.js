import {createSlice} from "@reduxjs/toolkit"

const initialCartState = {
    totalQuantity: 0,
    items: [],
    isChanged: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action) {
            state.isChanged = true;
            state.totalQuantity++;
            const {title, price, id} = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (!existingItem) {
                state.items.push({title, price, total: price, quantity: 1, id,});
            } else {
                existingItem.quantity++;
                existingItem.total = existingItem.total + price;
            }
        },
        removeItemFromCart(state, action) {
            state.isChanged = true;
            state.totalQuantity--;
            const id = action.payload.id;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.total = existingItem.total - existingItem.price;
            }
        },
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
