import { Component, Input } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formato-producto',
  templateUrl: './formato-producto.component.html',
  styleUrls: ['./formato-producto.component.css']
})
export class FormatoProductoComponent {
  @Input()
  productos:ProductoModel[]= []

  constructor(private router:Router) { }

  //Redirecciona a la Url con el detalle del producto
  verDetalles(producto:ProductoModel){
    this.router.navigate(['/producto/'+ producto.CODIGO])
  }
}
