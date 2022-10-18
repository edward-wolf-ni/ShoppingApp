import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { IProduct } from '../adapters/product';

export type cartState = {
    value: IProduct[]
}

const initialState: cartState = {
    value: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addNew: (state, action: PayloadAction<IProduct>) => {
            state.value.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<IProduct>) => {
            state.value = state.value.reduce((acc: IProduct[], cur: IProduct) => {
                if (cur.id !== action.payload.id)
                    acc.push(cur)
                return acc;
            }, [])
        },
    },
});

export const { addNew, removeItem } = cartSlice.actions;

/**
 * Define el selector del carrito
 * @returns 
 */
export const selectCart = (state: RootState) => state.cart.value;
/**
 * Define el selector para obtener un elemento del carrito 
 * @returns 
 */
export const selectCartById = (state:RootState, Id:number) => state.cart.value.find(c => c.id === Id)

export default cartSlice.reducer;