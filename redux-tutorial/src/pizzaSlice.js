import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toppings : ['pepperoni','cheese'],
    sauces : ['ketchup','mayonnaise']
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers : {
        addTopping : (state,action) =>{
            state.toppings = [...state.toppings,action.payload]
        },
        addSauce : (state,action) =>{
            state.sauces = [...state.sauces,action.payload]
        }
    }
    
})
export const {addTopping,addSauce} = pizzaSlice.actions
export default pizzaSlice.reducer