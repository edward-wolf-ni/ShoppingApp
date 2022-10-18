import { Action, configureStore, ThunkAction, } from '@reduxjs/toolkit';

import cartReducer from './cartSlice'

/**
 * Devuelve la configuración del carrito de compras 
 * @returns 
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;