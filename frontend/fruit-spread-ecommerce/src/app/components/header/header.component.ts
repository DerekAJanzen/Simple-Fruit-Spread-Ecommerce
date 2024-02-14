import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { selectCartItemCount, selectTotalCartItems } from './../../state/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs'
import { toggleCartMenu } from '../../state/cart/cart.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    standalone: true,
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule, RouterLink, RouterLinkActive, MatTabsModule],
    styleUrl: './header.component.css',
})

export class HeaderComponent implements OnInit {
    constructor(private store: Store) { }

    itemCount = toSignal(this.store.select(selectTotalCartItems));
    hidden = computed(() => this.itemCount()! <= 0);
    ngOnInit() {
     }

    openCart(){
        this.store.dispatch(toggleCartMenu());
    }
}