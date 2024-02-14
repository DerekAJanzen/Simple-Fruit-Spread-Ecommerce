import { MatCardModule } from '@angular/material/card';
import { selectIsCartOpen } from './state/cart/cart.selector';
import { toggleCartMenu } from './state/cart/cart.actions';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartMenuComponent } from "./components/cart-menu/cart-menu/cart-menu.component";
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, HeaderComponent, CartMenuComponent, MatSidenavModule, MatCardModule]
})
export class AppComponent {
  constructor(private store: Store){}
  title = 'jam-ecommerce';

  opened$ = this.store.select(selectIsCartOpen);

 

  toggleSideNav = () => {
    this.store.dispatch(toggleCartMenu())
  }
}
