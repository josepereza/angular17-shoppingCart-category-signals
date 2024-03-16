import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
carrito=inject(CartService)
remove(i:number){
this.carrito.removeItem(i)
}
}
