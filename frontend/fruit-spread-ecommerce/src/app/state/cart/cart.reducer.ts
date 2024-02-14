import { map } from 'rxjs/operators';
import { CartItem, Cart } from './../../model/cart.model';

import * as CartActions from './cart.actions';
import { createReducer, on, } from '@ngrx/store';

export interface CartState{
    items: CartItem[],
    total: number,
    totalItems: number,
    open: boolean,
}

export const initialCartState: CartState = {
    items: [],
    totalItems: 0,
    total: 0,
    open: false,
}



export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.toggleCartMenu, (state) => ({...state, open: !state.open})),
    on(CartActions.addCartItem, (state, item) => {
        let newTotal = state.total + item.item.price;
        let newTotalItems = state.totalItems + 1;

        const checkItemExistence = (descriptionParam: string) => state.items.some(({description}) => description === descriptionParam);

        if(checkItemExistence(item.item.description)){
            return{
                ...state,
                items: state.items.map(ele => ({...ele})) //create new array and spread the object
                .map(ele =>{
                    if(ele.description === item.item.description){
                        return {
                            ...ele,
                            quantity: ele.quantity + 1,
                        }
                    } else{
                        return ele;
                    }
                }),
                totalItems: newTotalItems,
                total: newTotal,
            }
        }
        else{
            return{
                ...state,
                items: [...state.items, item.item],
                totalItems: newTotalItems,
                total: newTotal,
            }
        }

        
        

        

        // let newItems = [...state.items, item.item]
        

        
    })
)