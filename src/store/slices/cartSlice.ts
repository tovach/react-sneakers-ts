import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../interfaces/interfaces";

interface CartState {
    items: IProduct[]
}

const initialState: CartState = {
    items: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<IProduct>) {
            state.items.push(action.payload);
        },
        removeItem(state, action: PayloadAction<IProduct>) {
            state.items.filter(el => el.id !== action.payload.id);
        },
    }
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;