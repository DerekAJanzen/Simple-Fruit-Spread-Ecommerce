import { addCartItem } from './../../state/cart/cart.actions';
import { selectJustJams } from './../../state/jams/jams.selector';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as JamActions from '../../state/jams/jams.actions';
import * as CartActions from '../../state/cart/cart.actions';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Jam } from '../../model/jam.model';
import { CartItem } from '../../model/cart.model';

@Component({
    selector: 'app-home',
    standalone: true,
    styleUrls: ['./jams.component.css'],
    imports: [CommonModule, MatCardModule, MatButtonModule],
    templateUrl: './jams.component.html'
})

export class JamComponent{
    constructor(private store: Store) { }

    ngOnInit() 
    { 
        this.store.dispatch(JamActions.fetchJams());
    }

    jams$ = this.store.select(selectJustJams);

    addToCart = (jam: Jam) =>{
        let item: CartItem = {description: jam.description, title: jam.flavor + jam.type, price: jam.price, quantity: 1, image: jam.image,};

        this.store.dispatch(CartActions.addCartItem({item}));
    }
}