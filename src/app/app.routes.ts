import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path:'', redirectTo:'productos', pathMatch:'full'},
{path:'productos', component:ProductosComponent},
{path:'cart', component:CartComponent},
{path:'**', redirectTo:'productos', pathMatch:'full'}

];
