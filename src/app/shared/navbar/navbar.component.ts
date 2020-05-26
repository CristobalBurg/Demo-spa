import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {


  constructor(private router:Router) { }

  //Redirecciona a la busqueda del producto
  //Valida que existan caracteres
  buscarProducto(termino:string){  
    if(!termino){
      Swal.fire("Oops..","Debes ingresar un producto","info")
    }
    this.router.navigate(['/search/'+ termino])
    }
  
  //redirecciona a la busqueda por categoria
  buscarPorCategoria(categoria:string){
    this.router.navigate(['/searchCat/'+ categoria])

    }
  


}
