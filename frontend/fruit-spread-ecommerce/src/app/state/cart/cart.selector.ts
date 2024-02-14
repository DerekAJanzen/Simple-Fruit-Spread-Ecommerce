import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectAllCartItems = createSelector(selectCart, (cart) =>{
    return cart.items;
})

export const selectIsCartOpen = createSelector(selectCart, (cart) =>{
    return cart.open;
})

export const selectCartItemCount = createSelector(selectCart, (cart) => {
    return cart.items.length;
})

export const selectTotalCartItems = createSelector(selectCart, (cart) =>{
    return cart.totalItems;
})

export const selectCartTotal = createSelector(selectCart, (cart) =>{
    return cart.total;
})