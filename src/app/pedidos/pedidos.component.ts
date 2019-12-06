import { Component, OnInit } from '@angular/core';
import { Pedido } from '../_models/pedido.model';
import { PedidoService } from '../_services/pedido.service';

@Component({
  selector: 'thor-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.sass']
})
export class PedidosComponent implements OnInit {

  public pedidos: Pedido[]
  constructor(private pedidosService: PedidoService) { }

  ngOnInit() {
    this.getPedidos()
  }
  public getPedidos(): void{
    this.pedidosService.getAllPedido().subscribe(
      (_pedidos: Pedido[]) =>{
        this.pedidos = _pedidos
    }, error => {
      alert(`500 ${error}`)
    })
  }
}
