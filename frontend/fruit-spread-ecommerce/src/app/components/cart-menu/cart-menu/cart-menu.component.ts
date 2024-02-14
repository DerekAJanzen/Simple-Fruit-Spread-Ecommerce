import { MatButtonModule } from '@angular/material/button';
import { selectAllCartItems, selectCartTotal } from './../../../state/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItemComponent } from "../cart-item/cart-item/cart-item.component";

@Component({
    selector: 'app-cart-menu',
    standalone: true,
    templateUrl: './cart-menu.component.html',
    styleUrl: './cart-menu.component.css',
    imports: [CommonModule, CartItemComponent, MatButtonModule]
})
export class CartMenuComponent {
  constructor(private store: Store){}

  items$ = this.store.select(selectAllCartItems);

  cartTotal$ = this.store.select(selectCartTotal);
  
}
