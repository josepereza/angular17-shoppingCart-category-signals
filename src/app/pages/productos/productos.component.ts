import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged } from 'rxjs';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe,ReactiveFormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  carrito=inject(CartService)
  _categoria:string | null=''
  categoriaForm=new FormControl('');
  productos:IProduct[]=[]
  ngOnInit(): void {
    this.api.allProducts()


    this.categoriaForm.valueChanges.pipe(debounceTime(800),distinctUntilChanged()).
    subscribe(data=>{
    console.log(data)
    this.api.categoria.set(data)
    this.api.allProducts()
    })
   
  }
api=inject(ApiService)
addToCart(producto:any){
  this.carrito.addItem(producto)
}

}
