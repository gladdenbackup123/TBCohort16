import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";

export const store = configureStore({
    reducer: {
        pizza : pizzaSlice,
    }
});