import { Injectable } from '@angular/core';
import { ProductoModel } from '../models/producto.model';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos:ProductoModel[] = [];
  private url = environment.url;

  constructor(private http:HttpClient) { 
    this.getListaProductos(); 
  }


  //Petición de todos los productos
  getProductos(){
    return this.http.get(`${this.url}/productos`)
  }


  //Petición de todos los productos para trabajar la busqueda
  getListaProductos(){
    return this.http.get(`${this.url}/productos`)
    .subscribe( (data:ProductoModel[]) =>{
      this.productos = data
    })
  }

  //Petición de un producto
  getProducto(id:string){
    return this.http.get(`${this.url}/producto/?codigo=${id}`)
  }
  
  //Busqueda de Producto por el nombre
  buscarProductos(termino:string){  

    let productosBusqueda:ProductoModel[]=[];
    termino = termino.toLocaleLowerCase();

       for(let producto of this.productos){
        let nombre = producto.NOMBRE.toLocaleLowerCase();
        if(nombre.indexOf(termino) >= 0){
          productosBusqueda.push(producto)
        }
      }
      return productosBusqueda
     }

  //Busqueda de producto por Categoria
  getCategoria(categoria:string){
    return this.http.get(`${this.url}/categoria/?categoria=${categoria}`)
  }

     
 
}
