import { addCartItem } from './../../state/cart/cart.actions';
import { selectAllJams } from './../../state/jams/jams.selector';
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
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, MatCardModule, MatButtonModule],
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private store: Store) { }

    jams$ = this.store.select(selectAllJams);

    ngOnInit() 
    { 
        this.store.dispatch(JamActions.fetchJams());
    }

    addToCart = (jam: Jam) =>{
        let item: CartItem = {description: jam.description, title: jam.flavor + jam.type, price: jam.price, quantity: 1, image: jam.image,};

        this.store.dispatch(CartActions.addCartItem({item}));
    }
}