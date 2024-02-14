import { MatCardModule } from '@angular/material/card';
import { CartItem } from './../../../../model/cart.model';
import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item!: CartItem;

  itemTotal = signal(0);

  ngOnChanges(){
    if(this.item){
      this.itemTotal.set(this.item.price * this.item.quantity);
    }
  }


}
