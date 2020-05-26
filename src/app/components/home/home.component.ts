import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  productos:ProductoModel[]=[];


  constructor(
    private productoService:ProductoService,
    private router:Router) { 
  }
  //Carga la data al iniciar el ciclo de vida del componente
  ngOnInit(): void {
    this.productoService.getProductos()
      .subscribe( (data:ProductoModel[]) =>{
        this.productos =  data
      },()=>{
        Swal.fire("Error","Error de conexión a la Base de Datos","error")
      })
  }

  //Navega a la url con los detalles del producto
  verDetalles(producto:ProductoModel){
    this.router.navigate(['/producto/'+ producto.CODIGO])
  }
}
