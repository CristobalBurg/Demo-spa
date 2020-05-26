import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  productos:ProductoModel[]=[];
  termino:string;
  categoria:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productoService:ProductoService,
     ) { }

  //Realiza la búsqueda al iniciarse el componente
  ngOnInit(): void {
    this.buscarProductos()
  }

  //Extrae el término de la búsqueda y se lo pasa al servicio
  buscarProductos(){
    this.activatedRoute.params.subscribe(params =>{
    this.termino = params['termino']
    this.productos = this.productoService.buscarProductos(this.termino)
    })
    
  }





}
