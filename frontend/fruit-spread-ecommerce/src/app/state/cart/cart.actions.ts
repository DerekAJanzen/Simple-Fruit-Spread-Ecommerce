import { CartItem } from './../../model/cart.model';
import { createAction, props } from '@ngrx/store';
export const addCartItem = createAction('[Jams Page] Add Item to Cart', props<{item: CartItem}>());
export const incrementCartItem = createAction('[Cart Menu] Increment Cart Item', props<{item: CartItem}>());
export const decrementCartItem = createAction('[Cart Menu] Decrement Cart Item', props<{item: CartItem}>());
export const removeCartItem = createAction('[Cart Menu] Remove Cart Item', props<{item: CartItem}>());
export const toggleCartMenu = createAction('[Cart Button] Toggle Cart Menu');