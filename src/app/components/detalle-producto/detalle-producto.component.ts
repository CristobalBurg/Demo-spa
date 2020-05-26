import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styles: [
  ]
})
export class DetalleProductoComponent  {

  producto:ProductoModel;

  constructor(
    private activatedRouter:ActivatedRoute,
    private productoService:ProductoService,
    private router:Router) {
      
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.productoService.getProducto(id).subscribe((data:ProductoModel) =>{
      console.log(data);
      this.producto = data
      })

    }

    volver(){
      this.router.navigate(['/home']);
    }
    comprar(){
      Swal.fire("Gracias por tu compra!","Excelente elección","success");
      this.router.navigate(['/home']);
    }
}
