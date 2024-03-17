import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal, } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 public categoria=signal<string | null>('all')
 public productos=signal<IProduct[]>([]);
  public categories=toSignal<string[]>(this.http.get<string[]>('https://fakestoreapi.com/products/categories'));

 
  allProducts(){

    if (this.categoria()==='all'){
      this.http.get<IProduct[]>(`https://fakestoreapi.com/products`)
      .subscribe(data=>{
        this.productos.set(data)
      })
    } else {
       this.http.get<IProduct[]>(`https://fakestoreapi.com/products/category/${this.categoria()}`)
    .subscribe(data=>{
      this.productos.set(data)
    })
    }
   
   }
  categorias=computed(()=>{
  const cate= this.categories()?.map((data,index)=>{
  return  {data,id:index} 
  })
  console.log(cate)
return cate
  })
  
  
//  public products$ = toObservable(this.products);
  constructor(private http: HttpClient) {

  }
}

