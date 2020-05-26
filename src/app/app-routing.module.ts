import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { SearchCatComponent } from './components/search-cat/search-cat.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search/:termino',component:SearchComponent},
  {path:'searchCat/:categoria',component:SearchCatComponent},
  {path:'producto/:id',component:DetalleProductoComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
