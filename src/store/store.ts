import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;