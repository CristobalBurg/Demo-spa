import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-search-cat',
  templateUrl: './search-cat.component.html',
  styles: [
  ]
})
export class SearchCatComponent implements OnInit {

  productos:ProductoModel[]=[];
  categoria:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productoService:ProductoService) {
   }

  ngOnInit(): void {
    this.buscarCategoria();
  }

  //Busca el listado de productos de la categoria y lo asigna a productos
  buscarCategoria(){
    this.activatedRoute.params.subscribe( params =>{
      this.productoService.getCategoria(params['categoria'])
        .subscribe((data:ProductoModel[]) =>{
          this.productos = data
          this.categoria = data[0].CATEGORIA;
          },()=>{
            Swal.fire("Error","Error de conexión a la Base de Datos","error")
          })
      })

  }
}
