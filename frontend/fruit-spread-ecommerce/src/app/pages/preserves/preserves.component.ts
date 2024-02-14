import { Component, Inject } from '@angular/core';
import { selectJustPreserves } from '../../state/jams/jams.selector';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Jam } from '../../model/jam.model';
import { CartItem } from '../../model/cart.model';
import * as JamActions from '../../state/jams/jams.actions';
import * as CartActions from '../../state/cart/cart.actions';
@Component({
    selector: 'app-preserves',
    templateUrl: './preserves.component.html',
    styleUrls: ['./preserves.component.css'],
    imports: [CommonModule, MatCardModule, MatButtonModule],
    standalone: true
})
export class PreservesComponent {
    constructor(private store: Store) { }

    preserves$ = this.store.select(selectJustPreserves);

    ngOnInit() {
        this.store.dispatch(JamActions.fetchJams());
    }


    addToCart = (jam: Jam) =>{
        let item: CartItem = {description: jam.description, title: jam.flavor + jam.type, price: jam.price, quantity: 1, image: jam.image,};

        this.store.dispatch(CartActions.addCartItem({item}));
    }
}
